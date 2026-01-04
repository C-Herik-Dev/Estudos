export interface WhatsAppConfig {
  accessToken: string;
  phoneNumberId: string;
  verifyToken?: string;
}

export interface WhatsAppMessage {
  messaging_product: string;
  recipient_type?: string;
  to: string;
  type: string;
  text?: {
    body: string;
  };
  template?: {
    name: string;
    language: {
      code: string;
    };
  };
}

export interface WhatsAppResponse {
  messaging_product: string;
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
}

export interface WhatsAppError {
  error: {
    message: string;
    type: string;
    code: number;
    error_data?: {
      messaging_product: string;
      details: string;
    };
    fbtrace_id?: string;
  };
}

export interface WebhookEntry {
  id: string;
  changes: Array<{
    value: {
      messaging_product: string;
      metadata: {
        display_phone_number: string;
        phone_number_id: string;
      };
      contacts?: Array<{
        profile: {
          name: string;
        };
        wa_id: string;
      }>;
      messages?: Array<{
        from: string;
        id: string;
        timestamp: string;
        type: string;
        text?: {
          body: string;
        };
        interactive?: {
          button_reply?: {
            title: string;
          };
          list_reply?: {
            title: string;
          };
        };
      }>;
      statuses?: Array<any>;
    };
    field: string;
  }>;
}

export interface WebhookPayload {
  object: string;
  entry: WebhookEntry[];
}

export interface TemplateTestResult {
  success: boolean;
  format?: string;
  result?: WhatsAppResponse;
  error?: WhatsAppError;
}

// --- Estrutura de Resposta Rápida (Botões) ---
export interface Button {
  type: "reply";
  reply: {
    id: string; // Payload que o bot recebe (ex: "MENU_INFO"). Deve ser único.
    title: string; // Texto visível no botão (máximo de 20 caracteres)
  };
}

export interface ButtonMessage {
  messaging_product: "whatsapp";
  to: string;
  type: "interactive";
  interactive: {
    type: "button";
    body: {
      text: string; // O texto principal acima dos botões
    };
    action: {
      buttons: Button[];
    };
  };
}

// --- Estrutura de Lista de Seleção (Listas) ---
export interface Row {
  id: string; // Payload que o bot recebe (ex: "PROD_LIST"). Deve ser único.
  title: string; // Título da opção
  description?: string; // Descrição opcional da opção
}

export interface Section {
  title: string; // Título da seção dentro da lista
  rows: Row[];
}

export interface ListMessage {
  messaging_product: "whatsapp";
  to: string;
  type: "interactive";
  interactive: {
    type: "list";
    body: {
      text: string; // O texto principal acima do seletor
    };
    action: {
      button: string; // Texto visível no botão de lista (ex: "Ver Opções")
      sections: Section[];
    };
    header?: {
        type: "text";
        text: string;
    };
    footer?: {
        text: string;
    }
  };
}