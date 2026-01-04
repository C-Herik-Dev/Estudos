import dotenv from "dotenv";

dotenv.config();

export const config = {
  whatsapp: {
    accessToken: process.env.ACCESS_TOKEN?.trim().replace(/^"|"$/g, "") || "",
    phoneNumberId: process.env.PHONE_NUMBER_ID?.trim() || "",
    verifyToken: process.env.VERIFY_TOKEN?.trim() || "",
  },
  server: {
    port: parseInt(process.env.PORT || "3000", 10),
  },
};

export const validateConfig = (): void => {
  if (!config.whatsapp.accessToken) {
    throw new Error("ACCESS_TOKEN não configurado no .env");
  }
  if (!config.whatsapp.phoneNumberId) {
    throw new Error("PHONE_NUMBER_ID não configurado no .env");
  }
};

