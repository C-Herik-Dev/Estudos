# WhatsApp Business API Bot

Bot profissional para WhatsApp Business API usando TypeScript, Express e arquitetura modular.

## Arquitetura

```
src/
├── api/                    # Cliente da API WhatsApp
│   └── whatsapp.client.ts
├── config/                 # Configurações
│   └── env.ts
├── controllers/            # Controllers HTTP
│   ├── webhook.controller.ts
│   └── test.controller.ts
├── services/               # Lógica de negócio
│   ├── message.service.ts
│   └── phone.service.ts
├── types/                  # Tipos TypeScript
│   └── whatsapp.types.ts
├── utils/                  # Utilitários
│   ├── errors.ts
│   └── logger.ts
└── index.ts               # Ponto de entrada
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
ACCESS_TOKEN=seu_token_aqui
PHONE_NUMBER_ID=seu_phone_number_id_aqui
VERIFY_TOKEN=seu_verify_token_aqui
PORT=3000
```

## Instalação

```bash
npm install
```

## Execução

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

## Endpoints

### Webhook
- `GET /webhook` - Verificação do webhook (Meta)
- `POST /webhook` - Recebimento de mensagens

### Testes
- `GET /test/hello-world?phone=5588998099298` - Testa template hello_world
- `GET /test/text?phone=5588998099298&message=Olá` - Testa envio de texto
- `GET /diagnose?phone=5588998099298` - Diagnóstico de formato de número

### Health Check
- `GET /health` - Status da aplicação

## Principais Componentes

### WhatsAppClient
Cliente para comunicação com a API do WhatsApp Business da Meta.

**Métodos:**
- `sendTextMessage(to, message, fallbackToTemplate?)` - Envia mensagem de texto
- `sendTemplate(to, templateName, languageCode?)` - Envia template
- `testMultipleFormats(waId, templateName?, languageCode?)` - Testa múltiplos formatos

### MessageService
Serviço de processamento de mensagens.

**Métodos:**
- `processMessage(phoneNumber, receivedText)` - Processa mensagem recebida

### PhoneService
Serviço de normalização e validação de números de telefone.

**Métodos:**
- `normalizeToE164(phoneNumber)` - Normaliza para formato E.164
- `isValidE164(phoneNumber)` - Valida formato E.164
- `generateFormats(waId)` - Gera formatos possíveis para teste

## Características

- ✅ Arquitetura modular e escalável
- ✅ TypeScript com tipos completos
- ✅ Tratamento de erros robusto
- ✅ Logging estruturado
- ✅ Retry automático com exponential backoff
- ✅ Fallback automático para templates
- ✅ Teste de múltiplos formatos de número
- ✅ Validação de configuração

## Estrutura de Classes

### WhatsAppClient
Responsável por todas as comunicações com a API do WhatsApp Business.

### MessageService
Processa mensagens recebidas e gera respostas.

### PhoneService
Utilitário para normalização e validação de números.

### WebhookController
Gerencia requisições do webhook da Meta.

### TestController
Endpoints de teste e diagnóstico.

## Tratamento de Erros

O sistema implementa tratamento robusto de erros:

- Erro 131030: Fallback automático para template
- Erros temporários (5xx, 429): Retry com exponential backoff
- Validação de configuração na inicialização
- Logging estruturado de erros

## Logging

Sistema de logging centralizado através da classe `Logger`:

- `Logger.info()` - Informações gerais
- `Logger.error()` - Erros
- `Logger.success()` - Sucessos
- `Logger.warn()` - Avisos
- `Logger.debug()` - Debug (apenas em desenvolvimento)

## Desenvolvimento

O código segue boas práticas:

- Separação de responsabilidades
- Injeção de dependências
- Tipos TypeScript completos
- Código limpo e manutenível
- Sem comentários desnecessários

