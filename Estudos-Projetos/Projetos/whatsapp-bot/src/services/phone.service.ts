export class PhoneService {
  private static readonly E164_REGEX = /^\+[1-9]\d{1,14}$/;
  private static readonly MIN_DIGITS = 10;

  static normalizeToE164(phoneNumber: string): string {
    if (!phoneNumber?.trim()) {
      throw new Error("Número de telefone não pode ser vazio");
    }

    let normalized = phoneNumber.trim().replace(/[^\d+]/g, "");

    if (!normalized.startsWith("+")) {
      normalized = "+" + normalized;
    }

    const digitsOnly = normalized.replace("+", "");
    if (digitsOnly.length < this.MIN_DIGITS) {
      throw new Error(
        `Número de telefone inválido: ${phoneNumber} (deve ter pelo menos ${this.MIN_DIGITS} dígitos)`
      );
    }

    return normalized;
  }

  static isValidE164(phoneNumber: string): boolean {
    return this.E164_REGEX.test(phoneNumber);
  }

  static generateFormats(waId: string): string[] {
    const formats: string[] = [];

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

