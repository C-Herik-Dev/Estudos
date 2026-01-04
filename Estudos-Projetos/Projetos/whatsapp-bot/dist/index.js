"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const whatsapp_client_1 = require("./api/whatsapp.client");
const message_service_1 = require("./services/message.service");
const webhook_controller_1 = require("./controllers/webhook.controller");
const test_controller_1 = require("./controllers/test.controller");
const logger_1 = require("./utils/logger");
try {
    (0, env_1.validateConfig)();
}
catch (error) {
    logger_1.Logger.error("Erro na configuração", error);
    process.exit(1);
}
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const whatsappClient = new whatsapp_client_1.WhatsAppClient(env_1.config.whatsapp);
const messageService = new message_service_1.MessageService(whatsappClient);
const webhookController = new webhook_controller_1.WebhookController(messageService);
const testController = new test_controller_1.TestController(whatsappClient);
app.get("/webhook", (req, res) => webhookController.verify(req, res));
app.post("/webhook", (req, res) => webhookController.handle(req, res));
app.get("/test/hello-world", (req, res) => testController.testHelloWorld(req, res));
app.get("/test/text", (req, res) => testController.testText(req, res));
app.get("/diagnose", (req, res) => testController.diagnose(req, res));
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});
const port = env_1.config.server.port;
app.listen(port, () => {
    logger_1.Logger.info(`Servidor rodando na porta ${port}`);
    logger_1.Logger.info(`Webhook: http://localhost:${port}/webhook`);
    logger_1.Logger.info(`Teste hello_world: http://localhost:${port}/test/hello-world?phone=SEU_NUMERO`);
    logger_1.Logger.info(`Teste texto: http://localhost:${port}/test/text?phone=SEU_NUMERO&message=Olá`);
    logger_1.Logger.info(`Diagnóstico: http://localhost:${port}/diagnose?phone=SEU_NUMERO`);
});
