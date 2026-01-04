"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneService = void 0;
class PhoneService {
    static normalizeToE164(phoneNumber) {
        if (!phoneNumber?.trim()) {
            throw new Error("Número de telefone não pode ser vazio");
        }
        let normalized = phoneNumber.trim().replace(/[^\d+]/g, "");
        if (!normalized.startsWith("+")) {
            normalized = "+" + normalized;
        }
        const digitsOnly = normalized.replace("+", "");
        if (digitsOnly.length < this.MIN_DIGITS) {
            throw new Error(`Número de telefone inválido: ${phoneNumber} (deve ter pelo menos ${this.MIN_DIGITS} dígitos)`);
        }
        return normalized;
    }
    static isValidE164(phoneNumber) {
        return this.E164_REGEX.test(phoneNumber);
    }
    static generateFormats(waId) {
        const formats = [];
        if (!waId.startsWith("+")) {
            formats.push(waId);
        }
        const withPlus = waId.startsWith("+") ? waId : `+${waId}`;
        formats.push(withPlus);
        if (waId.startsWith("55") && !waId.startsWith("+")) {
            formats.push(`+${waId}`);
        }
        return [...new Set(formats)];
    }
}
exports.PhoneService = PhoneService;
PhoneService.E164_REGEX = /^\+[1-9]\d{1,14}$/;
PhoneService.MIN_DIGITS = 10;
