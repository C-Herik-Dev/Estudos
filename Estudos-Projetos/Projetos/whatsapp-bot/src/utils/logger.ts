export class Logger {
  static info(message: string, data?: any): void {
    if (data) {
      console.log(`ℹ️ ${message}`, data);
    } else {
      console.log(`ℹ️ ${message}`);
    }
  }

  static error(message: string, error?: any): void {
    if (error) {
      console.error(`❌ ${message}`, error);
    } else {
      console.error(`❌ ${message}`);
    }
  }

  static success(message: string): void {
    console.log(`✅ ${message}`);
  }

  static warn(message: string): void {
    console.warn(`⚠️ ${message}`);
  }

  static debug(message: string, data?: any): void {
    if (process.env.NODE_ENV === "development" && data) {
      console.log(`🔍 ${message}`, data);
    } else if (process.env.NODE_ENV === "development") {
      console.log(`🔍 ${message}`);
    }
  }
}

