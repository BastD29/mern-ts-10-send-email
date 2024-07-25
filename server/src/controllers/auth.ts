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
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log("user in login:", user);
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    (req.session as SessionType).userId = (
      user._id as mongoose.Types.ObjectId
    ).toString();
    res.status(200).json({ message: "User logged in" });
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const getProfile = async (req: Request, res: Response) => {
  const userId = (req.session as SessionType).userId;
  console.log("req.session.userId:", userId);

  if (!userId) {
    return res.status(400).send("User ID is not present in the session.");
  }

  try {
    const user = await User.findById(userId);
    console.log("user in getProfile:", user);

    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(404).send("User not found.");
    }
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export { register, login, getProfile };
