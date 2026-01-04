import express from "express";
import cors from "cors";
import { config, validateConfig } from "./config/env";
import { WhatsAppClient } from "./api/whatsapp.client";
import { MessageService } from "./services/message.service";
import { WebhookController } from "./controllers/webhook.controller";
import { TestController } from "./controllers/test.controller";
import { StateService } from "./services/state.service"; // NOVO: IMPORTADO
import { Logger } from "./utils/logger";

try {
  validateConfig();
} catch (error) {
  Logger.error("Erro na configuração", error);
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

const whatsappClient = new WhatsAppClient(config.whatsapp);

// NOVO: CRIAÇÃO E INJEÇÃO DO SERVIÇO DE ESTADO
const stateService = new StateService();
const messageService = new MessageService(whatsappClient, stateService); 

const webhookController = new WebhookController(messageService);
const testController = new TestController(whatsappClient);

app.get("/webhook", (req, res) => webhookController.verify(req, res));
app.post("/webhook", (req, res) => webhookController.handle(req, res));

app.get("/test/hello-world", (req, res) => testController.testHelloWorld(req, res));
app.get("/test/text", (req, res) => testController.testText(req, res));
app.get("/diagnose", (req, res) => testController.diagnose(req, res));

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

const port = config.server.port;

app.listen(port, () => {
  Logger.info(`Servidor rodando na porta ${port}`);
  Logger.info(`Webhook: http://localhost:${port}/webhook`);
  Logger.info(`Teste hello_world: http://localhost:${port}/test/hello-world?phone=SEU_NUMERO`);
  Logger.info(`Teste texto: http://localhost:${port}/test/text?phone=SEU_NUMERO&message=Olá`);
  Logger.info(`Diagnóstico: http://localhost:${port}/diagnose?phone=SEU_NUMERO`);
});