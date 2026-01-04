// src/services/state.service.ts

// Define os possíveis estados de um usuário
export enum UserState {
  MAIN_MENU = "MAIN_MENU",           // Estado inicial ou Menu Principal
  INFO_MENU = "INFO_MENU",           // Está no Submenu de Informações (1x)
  PRODUCT_MENU = "PRODUCT_MENU",     // Está no Submenu de Produtos (2x)
  AWAITING_APPOINTMENT = "AWAITING_APPOINTMENT", // Escolheu a opção 3
  HUMAN_HANDOVER = "HUMAN_HANDOVER" // Encaminhado para o atendente
}

export class StateService {
  // Armazenamento em memória para fins de teste. A chave é o phoneNumber (waId).
  // Em produção, isso seria um banco de dados.
  private userStates: Map<string, UserState> = new Map();

  /**
   * Obtém o estado atual do usuário.
   * @param phoneNumber O WAID (telefone) do usuário.
   * @returns O estado atual ou MAIN_MENU se for a primeira vez.
   */
  public getState(phoneNumber: string): UserState {
      // Se o estado não existe, retorna o Menu Principal como padrão
      return this.userStates.get(phoneNumber) || UserState.MAIN_MENU;
  }

  /**
   * Define o novo estado do usuário.
   * @param phoneNumber O WAID (telefone) do usuário.
   * @param state O novo estado a ser definido.
   */
  public setState(phoneNumber: string, state: UserState): void {
      this.userStates.set(phoneNumber, state);
  }
  
  /**
   * Limpa o estado (volta para o Menu Principal).
   * @param phoneNumber O WAID (telefone) do usuário.
   */
  public clearState(phoneNumber: string): void {
      this.userStates.set(phoneNumber, UserState.MAIN_MENU);
  }
}