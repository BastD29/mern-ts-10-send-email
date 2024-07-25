import { Request, Response } from "express";

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

export { login, getPrivate };
