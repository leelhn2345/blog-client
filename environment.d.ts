declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // add more environment variables and their types here
      BACKEND_URL: string;
      NEXT_PUBLIC_AUTH_URL: string;
    }
  }
}

export {};
