import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserSession } from "../models/customs/user-session";
const authorize = async (req: Request | any, res: Response, next: any) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: {
          text: "UnAuthorized",
        },
      });
    }
    const tokenData = verify(
      token.split(" ")[1],
      process.env.PRIVATE_KEY ?? ""
    );
    req.session.userSession = tokenData as UserSession;
    next();
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export { authorize };
