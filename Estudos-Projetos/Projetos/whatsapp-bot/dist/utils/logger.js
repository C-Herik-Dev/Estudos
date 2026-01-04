"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static info(message, data) {
        if (data) {
            console.log(`ℹ️ ${message}`, data);
        }
        else {
            console.log(`ℹ️ ${message}`);
        }
    }
    static error(message, error) {
        if (error) {
            console.error(`❌ ${message}`, error);
        }
        else {
            console.error(`❌ ${message}`);
        }
    }
    static success(message) {
        console.log(`✅ ${message}`);
    }
    static warn(message) {
        console.warn(`⚠️ ${message}`);
    }
    static debug(message, data) {
        if (process.env.NODE_ENV === "development" && data) {
            console.log(`🔍 ${message}`, data);
        }
        else if (process.env.NODE_ENV === "development") {
            console.log(`🔍 ${message}`);
        }
    }
}
exports.Logger = Logger;
