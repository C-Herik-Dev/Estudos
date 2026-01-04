"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppAPIError = void 0;
class WhatsAppAPIError extends Error {
    constructor(status, code, message, traceId) {
        super(message);
        this.status = status;
        this.code = code;
        this.message = message;
        this.traceId = traceId;
        this.name = "WhatsAppAPIError";
    }
    static fromAxiosError(error) {
        const errorData = error.response?.data?.error;
        return new WhatsAppAPIError(error.response?.status || 500, errorData?.code || 0, errorData?.message || error.message, errorData?.fbtrace_id);
    }
    get isRecipientNotAllowed() {
        return this.code === 131030;
    }
    get isTemporary() {
        return this.status >= 500 || this.status === 429;
    }
}
exports.WhatsAppAPIError = WhatsAppAPIError;
