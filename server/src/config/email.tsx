import nodemailer from "nodemailer";
import { Email } from "../email";
import React from "react";
import { render } from "@react-email/components";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "test@testaroo.net",
    pass: "i8s4w7Zlwe0F4bdr&",
  },
});

const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: "test@testaroo.net",
  to: "miranoc510@maxturns.com",
  subject: "hello world",
  html: emailHtml,
};

export { transporter, options };
