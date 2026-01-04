"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookController = void 0;
const logger_1 = require("../utils/logger");
class WebhookController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    verify(req, res) {
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
    async handle(req, res) {
        try {
            const payload = req.body;
            logger_1.Logger.debug("Webhook payload recebido", payload);
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
        }
        catch (error) {
            logger_1.Logger.error("Erro ao processar webhook", error);
            res.sendStatus(200);
        }
    }
    async handleMessage(value) {
        const message = value.messages[0];
        const waId = value.contacts?.[0]?.wa_id || message.from;
        logger_1.Logger.debug(`Mensagem recebida de ${waId}`);
        if (message.type === "text") {
            const text = message.text?.body || "";
            await this.messageService.processMessage(waId, text);
            return;
        }
        if (message.type === "interactive") {
            const text = message.interactive?.button_reply?.title ||
                message.interactive?.list_reply?.title ||
                "";
            if (text) {
                await this.messageService.processMessage(waId, text);
            }
            return;
        }
        logger_1.Logger.info(`Tipo de mensagem não suportado: ${message.type}`);
    }
}
exports.WebhookController = WebhookController;
