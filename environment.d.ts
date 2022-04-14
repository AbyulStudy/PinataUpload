declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;

      PINATA_API_KEY?: string | undefined;
      PINATA_API_SECRET?: string;
      PINATA_JWT?: string;

      UPLOAD_DIR: string;
      UPLOAD_MAXSIZE: string;
      UPLOAD_DESCRIPTION: string;
    }
  }
}

export {};
