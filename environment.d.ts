declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_URL: string;
      // add more environment variables and their types here
    }
  }
}

export {};
