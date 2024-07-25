import { Request, Response } from "express";
import User from "../models/user";
import { SessionType } from "../types/session";
import mongoose from "mongoose";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ email, password });
    console.log("registered user:", user);
    await user.save();
    (req.session as SessionType).userId = (
      user._id as mongoose.Types.ObjectId
    ).toString();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(401).send((error as Error).message);
  }
};

const login = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(401).send((error as Error).message);
  }
};

const getPrivate = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(401).send((error as Error).message);
  }
};

export { register, login, getPrivate };
