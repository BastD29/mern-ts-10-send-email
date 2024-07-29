// import { render } from "@react-email/components";
import { Request, Response } from "express";
import { options, transporter } from "../config/email";
// import { Email } from "../email";
// import React from "react";
// import nodemailer from "nodemailer";

// * REPLACE HARD DATA WITH ENVIRONMENTS

const sendEmail = async (req: Request, res: Response) => {
  try {
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.hostinger.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: "test@testaroo.net",
    //     pass: "i8s4w7Zlwe0F4bdr&",
    //   },
    // });

    // const emailHtml = render(<Email url="https://example.com" />);

    // const options = {
    //   from: "test@testaroo.net",
    //   to: "miranoc510@maxturns.com",
    //   subject: "hello world",
    //   html: emailHtml,
    // };

    await transporter.sendMail(options);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error sending email" });
  }
};

export { sendEmail };
