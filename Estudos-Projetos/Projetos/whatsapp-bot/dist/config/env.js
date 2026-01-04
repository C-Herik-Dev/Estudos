"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    whatsapp: {
        accessToken: process.env.ACCESS_TOKEN?.trim().replace(/^"|"$/g, "") || "",
        phoneNumberId: process.env.PHONE_NUMBER_ID?.trim() || "",
        verifyToken: process.env.VERIFY_TOKEN?.trim() || "",
    },
    server: {
        port: parseInt(process.env.PORT || "3000", 10),
    },
};
const validateConfig = () => {
    if (!exports.config.whatsapp.accessToken) {
        throw new Error("ACCESS_TOKEN não configurado no .env");
    }
    if (!exports.config.whatsapp.phoneNumberId) {
        throw new Error("PHONE_NUMBER_ID não configurado no .env");
    }
};
exports.validateConfig = validateConfig;
