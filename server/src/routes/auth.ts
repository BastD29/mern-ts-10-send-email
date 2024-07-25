import express from "express";
import { getProfile, login, logout, register } from "../controllers/auth";
import { isAuthenticated } from "../middlewares/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", isAuthenticated, getProfile);

export default router;
