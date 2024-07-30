import nodemailer from "nodemailer";
import React from "react";
import { render } from "@react-email/components";
import {
  EMAIL_AUTH_PASS,
  EMAIL_AUTH_USER,
  EMAIL_FROM,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_TO,
} from "./environments";
import Email from "../emails/email";

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: true,
  auth: {
    user: EMAIL_AUTH_USER,
    pass: EMAIL_AUTH_PASS,
  },
});

const emailHtml = render(<Email url="https://example.com" />);

// const options = {
//   from: EMAIL_FROM,
//   to: EMAIL_TO,
//   subject: "hello world",
//   html: emailHtml,
// };

const getEmailOptions = (to: string) => ({
  from: EMAIL_FROM,
  to,
  subject: "hello world",
  html: emailHtml,
});

export { transporter, getEmailOptions };
