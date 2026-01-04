import { Request, Response } from "express";
import { WebhookPayload } from "../types/whatsapp.types";
import { MessageService } from "../services/message.service";
import { PhoneService } from "../services/phone.service";
import { Logger } from "../utils/logger";

export class WebhookController {
  constructor(private readonly messageService: MessageService) { }

  verify(req: Request, res: Response): void {
    const verifyToken = process.env.VERIFY_TOKEN;
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === verifyToken) {
      res.status(200).send(challenge);
      return;
    }

    res.status(403).send("Token ou modo inválido");
  }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const payload: WebhookPayload = req.body;
      Logger.debug("Webhook payload recebido", payload);

      const entry = payload.entry?.[0];
      if (!entry) {
        res.sendStatus(200);
        return;
      }

      const value = entry.changes?.[0]?.value;
      if (!value) {
        res.sendStatus(200);
        return;
      }

      if (value.messages) {
        await this.handleMessage(value);
      }

      res.sendStatus(200);
    } catch (error) {
      Logger.error("Erro ao processar webhook", error);
      res.sendStatus(200);
    }
  }

  private async handleMessage(value: any): Promise<void> {
    const message = value.messages[0];
    const waId = value.contacts?.[0]?.wa_id || message.from;

    Logger.debug(`Mensagem recebida de ${waId}`);

    // --- NOVA LÓGICA DE CAPTURA DA MENSAGEM ---
    let receivedText = "";

    if (message.type === "interactive") {
      // PRIORIZA O ID DO PAYLOAD (melhor para o nosso roteamento de estado)
      if (message.interactive.button_reply) {
        receivedText = message.interactive.button_reply.id;
      } else if (message.interactive.list_reply) {
        receivedText = message.interactive.list_reply.id;
      }
    } else if (message.type === "text") {
      receivedText = message.text?.body || "";
    }
    // ------------------------------------------

    if (receivedText) {
      // processMessage agora recebe a string de texto ou o ID do payload
      await this.messageService.processMessage(waId, receivedText);
    } else {
      Logger.info(`Tipo de mensagem não suportado ou sem texto: ${message.type}`);
    }

    return;
  }
}