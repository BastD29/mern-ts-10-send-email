declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    ALLOWED_ORIGIN: string;
    MONGO_URI: string;

    // nodemailer
    HOST: string;
    NODEMAILER_PORT: string;
    AUTH_USER: string;
    AUTH_PASS: string;
    FROM: string;
    TO: string;
  }
}
