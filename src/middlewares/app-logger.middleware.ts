import { Request, Response } from "express";

const appLogger = (req: Request, res: Response, next: any) => {
  next();
};

const apiRequestLogger = (req: Request, res: Response, next: any) => {
  console.log(req.url);
  next();
};

export { appLogger, apiRequestLogger };
