import { Router } from "express";
import type { Request, Response } from "express";

const app = Router;

const userApi = (app: void) => {
  const router = Router();

  app.use("/api/user", router);
};
