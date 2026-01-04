import axios, { AxiosInstance } from "axios";
// LINHA DE IMPORT ATUALIZADA para incluir ButtonMessage e ListMessage
import { WhatsAppConfig, WhatsAppMessage, WhatsAppResponse, TemplateTestResult, ButtonMessage, ListMessage } from "../types/whatsapp.types";
import { WhatsAppAPIError } from "../utils/errors";
import { PhoneService } from "../services/phone.service";
import { Logger } from "../utils/logger";

export class WhatsAppClient {
  private readonly api: AxiosInstance;
  private readonly phoneNumberId: string;
  private readonly maxRetries = 3;

  constructor(config: WhatsAppConfig) {
    this.phoneNumberId = config.phoneNumberId;
    this.api = axios.create({
      baseURL: `https://graph.facebook.com/v24.0/${config.phoneNumberId}`,
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  async sendTextMessage(
    to: string,
    message: string,
    fallbackToTemplate = true
  ): Promise<WhatsAppResponse | null> {
    const payload: WhatsAppMessage = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to,
      type: "text",
      text: { body: message },
    };

    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        const response = await this.api.post<WhatsAppResponse>("/messages", payload);
        Logger.success(`Mensagem enviada para ${to} (Tentativa ${attempt})`);
        return response.data;
      } catch (error) {
        const apiError = WhatsAppAPIError.fromAxiosError(error as any);
        
        if (apiError.isRecipientNotAllowed && fallbackToTemplate) {
          Logger.warn(`Erro 131030 detectado. Tentando template como fallback...`);
          return await this.handleFallback(to);
        }

        if (apiError.isTemporary && attempt < this.maxRetries) {
          const delay = Math.pow(2, attempt) * 100;
          Logger.info(`Erro temporário. Tentando novamente em ${delay}ms...`);
          await this.sleep(delay);
          continue;
        }

        Logger.error(`Falha ao enviar mensagem após ${attempt} tentativas`, apiError);
        return null;
      }
    }

    return null;
  }

  // --- NOVAS FUNÇÕES DE ENVIO INTERATIVO ---

  /**
   * Envia uma mensagem de lista (ListMessage).
   * @param to Número de telefone do destinatário.
   * @param listPayload Objeto com a estrutura da mensagem de lista.
   * @returns Resposta da API ou null.
   */
  async sendListMessage(
    to: string,
    listPayload: Omit<ListMessage, "messaging_product" | "to" | "type">
  ): Promise<WhatsAppResponse | null> {
    const payload: ListMessage = {
      messaging_product: "whatsapp",
      to,
      type: "interactive",
      ...listPayload,
    };

    try {
      const response = await this.api.post<WhatsAppResponse>("/messages", payload);
      Logger.success(`Mensagem de Lista enviada com sucesso para ${to}`);
      return response.data;
    } catch (error) {
      Logger.error("Erro ao enviar mensagem de lista", error);
      return this.handleFallback(to);
    }
  }

  /**
   * Envia uma mensagem de resposta rápida (ButtonMessage).
   * @param to Número de telefone do destinatário.
   * @param buttonPayload Objeto com a estrutura da mensagem de botão.
   * @returns Resposta da API ou null.
   */
  async sendButtonMessage(
    to: string,
    buttonPayload: Omit<ButtonMessage, "messaging_product" | "to" | "type">
  ): Promise<WhatsAppResponse | null> {
    const payload: ButtonMessage = {
      messaging_product: "whatsapp",
      to,
      type: "interactive",
      ...buttonPayload,
    };

    try {
      const response = await this.api.post<WhatsAppResponse>("/messages", payload);
      Logger.success(`Mensagem de Botão enviada com sucesso para ${to}`);
      return response.data;
    } catch (error) {
      Logger.error("Erro ao enviar mensagem de botão", error);
      return this.handleFallback(to);
    }
  }
  
  // --- FIM DAS NOVAS FUNÇÕES ---

  async sendTemplate(
    to: string,
    templateName: string,
    languageCode = "pt_BR"
  ): Promise<WhatsAppResponse> {
    const normalizedTo = PhoneService.normalizeToE164(to);
    const payload: WhatsAppMessage = {
      messaging_product: "whatsapp",
      to: normalizedTo,
      type: "template",
      template: {
        name: templateName,
        language: { code: languageCode },
      },
    };

    const response = await this.api.post<WhatsAppResponse>("/messages", payload);
    return response.data;
  }

  async testMultipleFormats(waId: string, templateName = "hello_world", languageCode = "pt_BR"): Promise<TemplateTestResult> {
    const formats = PhoneService.generateFormats(waId);
    Logger.debug(`Testando ${formats.length} formatos`, formats);

    for (const format of formats) {
      try {
        const payload: WhatsAppMessage = {
          messaging_product: "whatsapp",
          to: format,
          type: "template",
          template: {
            name: templateName,
            language: { code: languageCode },
          },
        };

        Logger.debug(`Testando formato: ${format}`);
        const response = await this.api.post<WhatsAppResponse>("/messages", payload);
        Logger.success(`Sucesso com formato: ${format}`);
        
        return {
          success: true,
          format,
          result: response.data,
        };
      } catch (error) {
        const apiError = WhatsAppAPIError.fromAxiosError(error as any);
        
        if (!apiError.isRecipientNotAllowed) {
          return {
            success: false,
            format,
            error: error as any,
          };
        }
      }
    }

    return {
      success: false,
      error: { error: { message: "Todos os formatos falharam", type: "Unknown", code: 0 } } as any,
    };
  }

  private async handleFallback(to: string): Promise<WhatsAppResponse | null> {
    try {
      const result = await this.testMultipleFormats(to);
      
      if (result.success) {
        Logger.success(`Fallback executado com sucesso usando formato: ${result.format}`);
        return result.result || null;
      }

      const normalizedTo = PhoneService.normalizeToE164(to);
      return await this.sendTemplate(normalizedTo, "hello_world");
    } catch (error) {
      Logger.error("Fallback para template falhou", error);
      return null;
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}