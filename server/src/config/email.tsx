import nodemailer from "nodemailer";
import React from "react";
import { render } from "@react-email/components";
import {
  EMAIL_AUTH_PASS,
  EMAIL_AUTH_USER,
  EMAIL_FROM,
  EMAIL_HOST,
  EMAIL_PORT,
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

const getEmailOptions = (to: string) => {
  const emailHtml = render(<Email email={to} />);

  return {
    from: EMAIL_FROM,
    to,
    subject: "hello world",
    html: emailHtml,
  };
};

export { transporter, getEmailOptions };
