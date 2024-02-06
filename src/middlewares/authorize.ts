import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
const authorize = async (req: Request, res: Response, next: any) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: {
          text: "UnAuthorized",
        },
      });
    }
    verify(token.split(" ")[1], process.env.PRIVATE_KEY ?? "");
    next();
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export { authorize };
