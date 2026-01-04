"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const phone_service_1 = require("../services/phone.service");
const logger_1 = require("../utils/logger");
class TestController {
    constructor(whatsappClient) {
        this.whatsappClient = whatsappClient;
    }
    async testHelloWorld(req, res) {
        try {
            const phone = req.query.phone;
            if (!phone) {
                res.status(400).json({
                    error: "Parâmetro 'phone' é obrigatório",
                    exemplo: "/test/hello-world?phone=5588998099298",
                });
                return;
            }
            logger_1.Logger.info(`Teste hello_world iniciado para ${phone}`);
            const result = await this.whatsappClient.testMultipleFormats(phone);
            if (result.success) {
                res.json({
                    success: true,
                    message: "Template hello_world enviado com sucesso",
                    phone_recebido: phone,
                    formato_funcionou: result.format,
                    phone_normalizado: phone_service_1.PhoneService.normalizeToE164(phone),
                    resposta: result.result,
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    message: "Nenhum formato funcionou",
                    phone_recebido: phone,
                    phone_normalizado: phone_service_1.PhoneService.normalizeToE164(phone),
                    error: result.error,
                });
            }
        }
        catch (error) {
            logger_1.Logger.error("Erro no teste hello_world", error);
            res.status(500).json({
                error: "Erro ao enviar template",
                details: error.message,
            });
        }
    }
    async testText(req, res) {
        try {
            const phone = req.query.phone;
            const message = req.query.message || "Teste de mensagem";
            if (!phone) {
                res.status(400).json({
                    error: "Parâmetro 'phone' é obrigatório",
                    exemplo: "/test/text?phone=5588998099298&message=Olá",
                });
                return;
            }
            logger_1.Logger.info(`Teste de texto iniciado para ${phone}`);
            const result = await this.whatsappClient.sendTextMessage(phone, message);
            res.json({
                success: !!result,
                message: result ? "Mensagem enviada" : "Mensagem não enviada",
                phone_recebido: phone,
                phone_normalizado: phone_service_1.PhoneService.normalizeToE164(phone),
                resposta: result,
            });
        }
        catch (error) {
            logger_1.Logger.error("Erro no teste de texto", error);
            res.status(500).json({
                error: "Erro ao enviar mensagem",
                details: error.message,
            });
        }
    }
    diagnose(req, res) {
        try {
            const phone = req.query.phone;
            if (!phone) {
                res.status(400).json({
                    error: "Parâmetro 'phone' é obrigatório",
                    exemplo: "/diagnose?phone=5588998099298",
                });
                return;
            }
            const normalized = phone_service_1.PhoneService.normalizeToE164(phone);
            const withoutPlus = normalized.replace("+", "");
            res.json({
                numero_recebido: phone,
                formato_e164_com_plus: normalized,
                formato_wa_id_sem_plus: withoutPlus,
                formatos_possiveis: phone_service_1.PhoneService.generateFormats(phone),
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Erro ao processar número",
                details: error.message,
            });
        }
    }
}
exports.TestController = TestController;
