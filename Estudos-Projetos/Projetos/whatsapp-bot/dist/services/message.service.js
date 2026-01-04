"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const logger_1 = require("../utils/logger");
class MessageService {
    constructor(whatsappClient) {
        this.whatsappClient = whatsappClient;
    }
    async processMessage(phoneNumber, receivedText) {
        try {
            const responseText = this.generateResponse(receivedText);
            const result = await this.whatsappClient.sendTextMessage(phoneNumber, responseText, true);
            if (!result) {
                logger_1.Logger.warn("Mensagem não foi enviada. Verifique os logs para detalhes.");
            }
        }
        catch (error) {
            logger_1.Logger.error("Erro ao processar mensagem", error);
            throw error;
        }
    }
    generateResponse(receivedText) {
        return `Olá! Você disse: "${receivedText}". Por favor, me responda em menos de 24h para que eu possa continuar a conversa com você!`;
    }
}
exports.MessageService = MessageService;
