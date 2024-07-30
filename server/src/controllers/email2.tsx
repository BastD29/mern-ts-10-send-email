import { Request, Response } from "express";
import { getEmailOptions, transporter } from "../config/email";

const sendEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    // console.log("email:", email);
    const options = getEmailOptions(email);
    // console.log("options:", options);
    await transporter.sendMail(options);
    res.status(200).send({ message: `Email successfully sent to ${email}` });
  } catch (error) {
    res.status(500).send({ message: "Error sending email" });
  }
};

export { sendEmail };
