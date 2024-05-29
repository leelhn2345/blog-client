declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // add more environment variables and their types here
      BACKEND_URL: string;
    }
  }
}

export {};
