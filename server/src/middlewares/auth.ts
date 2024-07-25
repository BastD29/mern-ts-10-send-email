import { Request, Response, NextFunction } from "express";
import { SessionType } from "../types/session";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  console.log("req.session.id:", (req.session as SessionType).userId);

  if ((req.session as SessionType).userId) {
    return next();
  }
  return res.status(401).json({ message: "Unauthorized" });
};

export { isAuthenticated };
