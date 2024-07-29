import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: `./environments/.env.${env}` });

const {
  NODE_ENV,
  ALLOWED_ORIGIN,
  PORT,
  MONGO_URI,

  // nodemailer
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_AUTH_USER,
  EMAIL_AUTH_PASS,
  EMAIL_FROM,
  EMAIL_TO,
} = process.env;

export {
  NODE_ENV,
  ALLOWED_ORIGIN,
  PORT,
  MONGO_URI,

  // nodemailer
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_AUTH_USER,
  EMAIL_AUTH_PASS,
  EMAIL_FROM,
  EMAIL_TO,
};
