import { WhatsAppClient } from "../api/whatsapp.client";
import { Logger } from "../utils/logger";
import { StateService, UserState } from "./state.service";
import { ButtonMessage, ListMessage } from "../types/whatsapp.types"; 

// O retorno de generateResponse será uma String OU um Payload (parte do objeto ButtonMessage ou ListMessage)
type MessageResponse = string | Omit<ButtonMessage, "messaging_product" | "to" | "type"> | Omit<ListMessage, "messaging_product" | "to" | "type">;

export class MessageService {
  constructor(
    private readonly whatsappClient: WhatsAppClient,
    private readonly stateService: StateService
  ) {}

  // processMessage agora coordena o envio baseado no tipo de retorno de generateResponse
  async processMessage(phoneNumber: string, receivedText: string): Promise<void> {
    try {
      // response pode ser string, ButtonMessage, ou ListMessage
      const response = this.generateResponse(phoneNumber, receivedText);
      let result;

      // 1. Envio de Mensagem de Texto Pura
      if (typeof response === 'string') {
          // Se for uma string (mensagens de erro, respostas finais, etc.)
          result = await this.whatsappClient.sendTextMessage(phoneNumber, response, true);
      } 
      // 2. Envio de Mensagem de Botão
      else if (response.interactive.type === 'button') {
          result = await this.whatsappClient.sendButtonMessage(phoneNumber, response as Omit<ButtonMessage, "messaging_product" | "to" | "type">);
      } 
      // 3. Envio de Mensagem de Lista 
      else if (response.interactive.type === 'list') {
          result = await this.whatsappClient.sendListMessage(phoneNumber, response as Omit<ListMessage, "messaging_product" | "to" | "type">);
      }

      if (!result) {
        Logger.warn("Mensagem interativa não foi enviada. Verifique os logs para detalhes.");
      }
    } catch (error) {
      Logger.error("Erro ao processar mensagem", error);
      throw error;
    }
  }

  // generateResponse agora retorna a união dos tipos (string ou payload)
  private generateResponse(phoneNumber: string, receivedText: string): MessageResponse {
    
    // 1. Normalização
    const normalizedText = receivedText.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // 2. Comandos de Atendente (Prioridade Global)
    const isSeekingHuman = (
      normalizedText === "4" || 
      normalizedText === "humano" || 
      normalizedText === "suporte" || 
      normalizedText === "atendente" || 
      normalizedText.includes("falar com")
    );

    if (isSeekingHuman) {
        this.stateService.setState(phoneNumber, UserState.HUMAN_HANDOVER);
        return "👋 **Encaminhando para Atendimento Humano**\n\nAguarde um momento, estamos te direcionando para o primeiro atendente disponível. Por favor, detalhe sua dúvida para agilizar o processo.";
    }

    // 3. Comandos de Navegação Rápida (Saudação: LIMPA o estado e ENVIA a saudação)
    if (normalizedText === "oi" || normalizedText === "ola") {
      this.stateService.clearState(phoneNumber); 
      // Passa o texto de saudação explicitamente como prefixo
      const greeting = "👋 Olá! Bem-vindo(a) ao nosso atendimento automático.";
      return this.getMainMenuPayload(greeting); 
    }
    
    // 4. Lógica de Estado (Switch)
    const currentState = this.stateService.getState(phoneNumber);

    switch (currentState) {
      case UserState.MAIN_MENU:
        return this.handleMainMenu(phoneNumber, normalizedText);

      case UserState.INFO_MENU:
        return this.handleInfoMenu(phoneNumber, normalizedText);

      case UserState.PRODUCT_MENU:
        return this.handleProductMenu(phoneNumber, normalizedText);

      case UserState.AWAITING_APPOINTMENT: 
        // Se receber 0 ou menu, limpa o estado e volta para o principal
        if (normalizedText === "menu" || normalizedText === "0") {
            this.stateService.clearState(phoneNumber);
            // Volta para o menu sem saudação (apenas a estrutura do menu)
            return this.getMainMenuPayload(); 
        }
        // Se receber qualquer outra coisa, reenvia a mensagem de Horários/Próxima Ação
        return this.getAwaitingAppointmentResponse(); 
        
      case UserState.HUMAN_HANDOVER:
        // Mantém o usuário no estado de encaminhamento até o atendente assumir
        return "Sua solicitação está sendo atendida. Por favor, aguarde, nosso atendente lerá a sua mensagem o mais rápido possível.";

      default:
        // Tratamento para qualquer estado inesperado (geralmente primeira mensagem sem oi/ola)
        this.stateService.clearState(phoneNumber);
        const errorMsgDefault = "⚠️ **Ops!** Não consegui processar sua primeira mensagem. Você foi redirecionado para o Menu Principal.";
        return this.getMainMenuPayload(errorMsgDefault);
    }
  }

  // --- Funções de Criação dos Menus (Payloads) ---

  // Refatorado para aceitar um prefixo, que pode ser a saudação ou a mensagem de erro.
  private getMainMenuPayload(prefixText?: string): Omit<ButtonMessage, "messaging_product" | "to" | "type"> {
      
      const menuPrompt = "🤖 **Menu Principal**\n\nPor favor, escolha uma das opções abaixo:";

      let bodyText = menuPrompt;
      // Se houver um prefixo (saudação ou erro), ele é adicionado antes do menuPrompt.
      if (prefixText) {
          bodyText = `${prefixText}\n\n${menuPrompt}`;
      }

      return {
          interactive: {
              type: "button",
              body: {
                  text: bodyText,
              },
              action: {
                  buttons: [
                      { type: "reply", reply: { id: "1", title: "1. Sobre a Empresa" } },
                      { type: "reply", reply: { id: "2", title: "2. Produtos" } },
                      { type: "reply", reply: { id: "3", title: "3. Horários Abertos" } },
                  ],
              },
          }
      };
  }

  private getInfoMenuPayload(): Omit<ButtonMessage, "messaging_product" | "to" | "type"> {
      return {
          interactive: {
              type: "button",
              body: {
                  text: "🏢 **Informações da Empresa**\n\nEscolha um detalhe ou volte ao menu principal:",
              },
              action: {
                  buttons: [
                      { type: "reply", reply: { id: "11", title: "1. Endereço" } },
                      { type: "reply", reply: { id: "12", title: "2. Funcionamento" } },
                      { type: "reply", reply: { id: "0", title: "0. Menu Principal" } }, 
                  ],
              },
          }
      };
  }

// Menu de Lista de Produtos 
  private getProductMenuPayload(): Omit<ListMessage, "messaging_product" | "to" | "type"> {
      return {
            interactive: {
                  type: "list",
                  header: {
                      type: "text",
                      text: "📦 Catálogo de Produtos",
                  },
                  body: {
                      text: "Selecione o produto desejado na lista abaixo para ver detalhes (7 opções + Voltar):",
                  },
                  footer: { 
                      text: "Use o item '0. Menu Principal' para retornar à tela inicial.",
                  },
                  action: {
                      button: "Ver Produtos",
                    sections: [
                      {
                          title: "Soluções de Automação",
                          rows: [
                              { id: "21", title: "1. Chatbot Básico", description: "Atendimento 24/7." },
                              { id: "22", title: "2. CRM Integration", description: "Conexão com sistemas." },
                              { id: "23", title: "3. API Services", description: "Desenvolvimento customizado." },
                              { id: "24", title: "4. Auditoria de Código", description: "Otimização de performance." },
                              { id: "25", title: "5. Treinamento de IA", description: "Modelos de Linguagem." },
                              { id: "26", title: "6. Consultoria Técnica", description: "Estratégia e Arquitetura." },
                              { id: "27", title: "7. Suporte Premium", description: "Prioridade no atendimento." },
                          ],
                      },
                      {
                          title: "Navegação",
                          rows: [
                              { id: "0", title: "0. Menu Principal", description: "Voltar para o início." },
                          ],
                      },
                  ],
              },
          }
      };
  }

// NOVO MÉTODO: Texto auxiliar para o estado AWAITING_APPOINTMENT
  private getAwaitingAppointmentResponse(): string {
    return "🗓️ **Horários Disponíveis:** Nossos horários de serviço são de Segunda a Sexta, das 10h às 17h. Estamos aguardando sua próxima ação.\n\nDigite **0** para voltar.";
  }

  // --- Funções Auxiliares para lidar com cada Estado ---

  private handleMainMenu(phoneNumber: string, text: string): MessageResponse {
    switch (text) {
      case "menu":
      case "0":
        return this.getMainMenuPayload();
      case "1":
        this.stateService.setState(phoneNumber, UserState.INFO_MENU);
        return this.getInfoMenuPayload(); 
      case "2": 
        this.stateService.setState(phoneNumber, UserState.PRODUCT_MENU);
        return this.getProductMenuPayload(); 
      case "3": 
        this.stateService.setState(phoneNumber, UserState.AWAITING_APPOINTMENT);
        return this.getAwaitingAppointmentResponse();
      default:
        // CORREÇÃO: Passa apenas a mensagem de erro, sem a saudação de boas-vindas
        const errorMsg = `❌ Opção Inválida! Não entendi o que você quis dizer por *${text}*. Por favor, escolha uma opção nos botões abaixo:`;
        return this.getMainMenuPayload(errorMsg); 
    }
  }

  private handleInfoMenu(phoneNumber: string, text: string): MessageResponse {
    switch (text) {
      case "11": 
      case "1":  
        return "📍 **Localização:** Estamos localizados na Rua dos Bots, 123, Bairro da Lógica, Cidade da Programação. Digite **0** para voltar.";
      case "12": 
      case "2":  
        return "⏰ **Horário de Funcionamento:** De segunda a sexta, das 8:00h às 18:00h. Sábados das 9:00h às 13:00h. Digite **0** para voltar.";
      case "13": 
      case "3":  
        return "💡 **Missão e Valores:** Nossa missão é automatizar sua vida com excelência. Valorizamos a eficiência e a clareza. Digite **0** para voltar.";
      case "0":
        this.stateService.clearState(phoneNumber); 
        return this.getMainMenuPayload();
      default:
        // Opção inválida dentro do submenu, reenvia o menu de informações
        return this.getInfoMenuPayload(); 
    }
  }

  private handleProductMenu(phoneNumber: string, text: string): MessageResponse {
    
    // O ID "0" ou a palavra "menu" sempre limpam o estado e voltam
    if (text === "menu" || text === "0") {
        this.stateService.clearState(phoneNumber);
        return this.getMainMenuPayload();
    }

    // Lógica para os 7 produtos (IDs: 21 a 27)
    switch (text) {
      case "21":
      case "1": 
        return "✅ **Detalhe Produto 1:** Nosso Chatbot Básico oferece scripts pré-definidos para FAQs comuns. Digite **0** para voltar.";
      case "22":
      case "2":
        return "✅ **Detalhe Produto 2:** A integração CRM permite sincronizar leads e histórico de conversas em tempo real. Digite **0** para voltar.";
      case "23":
      case "3":
        return "✅ **Detalhe Produto 3:** Desenvolvemos APIs sob medida para conectar seu sistema de gestão ao WhatsApp. Digite **0** para voltar.";
      case "24":
      case "4":
        return "✅ **Detalhe Produto 4:** Nossa auditoria garante que seu código está otimizado e seguro. Digite **0** para voltar.";
      case "25":
      case "5":
        return "✅ **Detalhe Produto 5:** Treinamos modelos de IA para entender o vocabulário e o contexto do seu negócio. Digite **0** para voltar.";
      case "26":
      case "6":
        return "✅ **Detalhe Produto 6:** Consultoria para definir a melhor estratégia de automação para o seu caso de uso. Digite **0** para voltar.";
      case "27":
      case "7":
        return "✅ **Detalhe Produto 7:** Suporte dedicado 24/7 com tempo de resposta garantido. Digite **0** para voltar.";

      default:
        // Opção inválida, reenvia o menu de lista de produtos
        return this.getProductMenuPayload();
    }
  }
}