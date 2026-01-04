import { Request, Response } from "express";
import { WhatsAppClient } from "../api/whatsapp.client";
import { PhoneService } from "../services/phone.service";
import { Logger } from "../utils/logger";

export class TestController {
  constructor(private readonly whatsappClient: WhatsAppClient) {}

  async testHelloWorld(req: Request, res: Response): Promise<void> {
    try {
      const phone = req.query.phone as string;

      if (!phone) {
        res.status(400).json({
          error: "Parâmetro 'phone' é obrigatório",
          exemplo: "/test/hello-world?phone=5588998099298",
        });
        return;
      }

      Logger.info(`Teste hello_world iniciado para ${phone}`);
      const result = await this.whatsappClient.testMultipleFormats(phone);

      if (result.success) {
        res.json({
          success: true,
          message: "Template hello_world enviado com sucesso",
          phone_recebido: phone,
          formato_funcionou: result.format,
          phone_normalizado: PhoneService.normalizeToE164(phone),
          resposta: result.result,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Nenhum formato funcionou",
          phone_recebido: phone,
          phone_normalizado: PhoneService.normalizeToE164(phone),
          error: result.error,
        });
      }
    } catch (error) {
      Logger.error("Erro no teste hello_world", error);
      res.status(500).json({
        error: "Erro ao enviar template",
        details: (error as any).message,
      });
    }
  }

  async testText(req: Request, res: Response): Promise<void> {
    try {
      const phone = req.query.phone as string;
      const message = (req.query.message as string) || "Teste de mensagem";

      if (!phone) {
        res.status(400).json({
          error: "Parâmetro 'phone' é obrigatório",
          exemplo: "/test/text?phone=5588998099298&message=Olá",
        });
        return;
      }

      Logger.info(`Teste de texto iniciado para ${phone}`);
      const result = await this.whatsappClient.sendTextMessage(phone, message);

      res.json({
        success: !!result,
        message: result ? "Mensagem enviada" : "Mensagem não enviada",
        phone_recebido: phone,
        phone_normalizado: PhoneService.normalizeToE164(phone),
        resposta: result,
      });
    } catch (error) {
      Logger.error("Erro no teste de texto", error);
      res.status(500).json({
        error: "Erro ao enviar mensagem",
        details: (error as any).message,
      });
    }
  }

  diagnose(req: Request, res: Response): void {
    try {
      const phone = req.query.phone as string;

      if (!phone) {
        res.status(400).json({
          error: "Parâmetro 'phone' é obrigatório",
          exemplo: "/diagnose?phone=5588998099298",
        });
        return;
      }

      const normalized = PhoneService.normalizeToE164(phone);
      const withoutPlus = normalized.replace("+", "");

      res.json({
        numero_recebido: phone,
        formato_e164_com_plus: normalized,
        formato_wa_id_sem_plus: withoutPlus,
        formatos_possiveis: PhoneService.generateFormats(phone),
      });
    } catch (error) {
      res.status(500).json({
        error: "Erro ao processar número",
        details: (error as Error).message,
      });
    }
  }
}

