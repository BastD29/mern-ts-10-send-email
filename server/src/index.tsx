import express from "express";
import cors from "cors";
import { NODE_ENV, PORT } from "./config/environments";
import { connectDB } from "./config/db";
import { corsOptions } from "./config/cors";
// import nodemailer from "nodemailer";
// import { render } from "@react-email/components";
// import { Email } from "./email";
// import React from "react";
import email from "./routes/email";

connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", email);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, ${NODE_ENV} environment`);
});

// const transporter = nodemailer.createTransport({
//   host: "smtp.hostinger.com",
//   port: 465,
//   secure: true,
//   // auth: {
//   //   user: 'my_user',
//   //   pass: 'my_password',
//   // },
// });

// const emailHtml = render(<Email url="https://example.com" />);

// const options = {
//   from: "test@testaroo.net",
//   to: "miranoc510@maxturns.com",
//   subject: "hello world",
//   html: emailHtml,
// };

// await transporter.sendMail(options);
