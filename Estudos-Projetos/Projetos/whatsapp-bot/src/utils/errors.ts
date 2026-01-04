import { AxiosError } from "axios";
import { WhatsAppError } from "../types/whatsapp.types";

export class WhatsAppAPIError extends Error {
  constructor(
    public status: number,
    public code: number,
    public message: string,
    public traceId?: string
  ) {
    super(message);
    this.name = "WhatsAppAPIError";
  }

  static fromAxiosError(error: AxiosError<WhatsAppError>): WhatsAppAPIError {
    const errorData = error.response?.data?.error;
    return new WhatsAppAPIError(
      error.response?.status || 500,
      errorData?.code || 0,
      errorData?.message || error.message,
      errorData?.fbtrace_id
    );
  }

  get isRecipientNotAllowed(): boolean {
    return this.code === 131030;
  }

  get isTemporary(): boolean {
    return this.status >= 500 || this.status === 429;
  }
}

