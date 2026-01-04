"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppClient = void 0;
const axios_1 = __importDefault(require("axios"));
const errors_1 = require("../utils/errors");
const phone_service_1 = require("../services/phone.service");
const logger_1 = require("../utils/logger");
class WhatsAppClient {
    constructor(config) {
        this.maxRetries = 3;
        this.phoneNumberId = config.phoneNumberId;
        this.api = axios_1.default.create({
            baseURL: `https://graph.facebook.com/v20.0/${config.phoneNumberId}`,
            headers: {
                Authorization: `Bearer ${config.accessToken}`,
                "Content-Type": "application/json",
            },
        });
    }
    async sendTextMessage(to, message, fallbackToTemplate = true) {
        const payload = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to,
            type: "text",
            text: { body: message },
        };
        for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
            try {
                const response = await this.api.post("/messages", payload);
                logger_1.Logger.success(`Mensagem enviada para ${to} (Tentativa ${attempt})`);
                return response.data;
            }
            catch (error) {
                const apiError = errors_1.WhatsAppAPIError.fromAxiosError(error);
                if (apiError.isRecipientNotAllowed && fallbackToTemplate) {
                    logger_1.Logger.warn(`Erro 131030 detectado. Tentando template como fallback...`);
                    return await this.handleFallback(to);
                }
                if (apiError.isTemporary && attempt < this.maxRetries) {
                    const delay = Math.pow(2, attempt) * 100;
                    logger_1.Logger.info(`Erro temporário. Tentando novamente em ${delay}ms...`);
                    await this.sleep(delay);
                    continue;
                }
                logger_1.Logger.error(`Falha ao enviar mensagem após ${attempt} tentativas`, apiError);
                return null;
            }
        }
        return null;
    }
    async sendTemplate(to, templateName, languageCode = "pt_BR") {
        const normalizedTo = phone_service_1.PhoneService.normalizeToE164(to);
        const payload = {
            messaging_product: "whatsapp",
            to: normalizedTo,
            type: "template",
            template: {
                name: templateName,
                language: { code: languageCode },
            },
        };
        const response = await this.api.post("/messages", payload);
        return response.data;
    }
    async testMultipleFormats(waId, templateName = "hello_world", languageCode = "pt_BR") {
        const formats = phone_service_1.PhoneService.generateFormats(waId);
        logger_1.Logger.debug(`Testando ${formats.length} formatos`, formats);
        for (const format of formats) {
            try {
                const payload = {
                    messaging_product: "whatsapp",
                    to: format,
                    type: "template",
                    template: {
                        name: templateName,
                        language: { code: languageCode },
                    },
                };
                logger_1.Logger.debug(`Testando formato: ${format}`);
                const response = await this.api.post("/messages", payload);
                logger_1.Logger.success(`Sucesso com formato: ${format}`);
                return {
                    success: true,
                    format,
                    result: response.data,
                };
            }
            catch (error) {
                const apiError = errors_1.WhatsAppAPIError.fromAxiosError(error);
                if (!apiError.isRecipientNotAllowed) {
                    return {
                        success: false,
                        format,
                        error: error,
                    };
                }
            }
        }
        return {
            success: false,
            error: { error: { message: "Todos os formatos falharam", type: "Unknown", code: 0 } },
        };
    }
    async handleFallback(to) {
        try {
            const result = await this.testMultipleFormats(to);
            if (result.success) {
                logger_1.Logger.success(`Fallback executado com sucesso usando formato: ${result.format}`);
                return result.result || null;
            }
            const normalizedTo = phone_service_1.PhoneService.normalizeToE164(to);
            return await this.sendTemplate(normalizedTo, "hello_world");
        }
        catch (error) {
            logger_1.Logger.error("Fallback para template falhou", error);
            return null;
        }
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
exports.WhatsAppClient = WhatsAppClient;
