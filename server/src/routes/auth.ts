import express from "express";
import { getPrivate, login, register } from "../controllers/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/private", getPrivate);

export default router;
