declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;

      PINATA_API_KEY?: string | undefined;
      PINATA_API_SECRET?: string;
      PINATA_JWT?: string;

      UPLOAD_DIR: string; // Multer Upload Directory Path
      UPLOAD_MAXSIZE: string; // Multer Upload MaxSize
      UPLOAD_DESCRIPTION: string; // example.(maxsize 10M = 10*1024*1024 = 104857600)
    }
  }
}

export {};
