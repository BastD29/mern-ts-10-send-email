import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: `./environments/.env.${env}` });

const {
  NODE_ENV,
  ALLOWED_ORIGIN,
  PORT,
  MONGO_URI,

  // nodemailer
  HOST,
  NODEMAILER_PORT,
  AUTH_USER,
  AUTH_PASS,
  FROM,
  TO,
} = process.env;

export {
  NODE_ENV,
  ALLOWED_ORIGIN,
  PORT,
  MONGO_URI,

  // nodemailer
  HOST,
  NODEMAILER_PORT,
  AUTH_USER,
  AUTH_PASS,
  FROM,
  TO,
};
