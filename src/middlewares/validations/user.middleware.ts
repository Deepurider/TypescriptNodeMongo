import { Request, Response } from "express";
const postUserValidation = (req: Request, res: Response, next: any) => {
  console.log("POST USER VALIDATION FIRED");
  next();
};

export { postUserValidation };
