import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { asyncHandler } from "../utils/async-handler.util";
import { UserModel } from "../models/user";
import { TokenPayload } from "../models/customs/token-payload";

const login = asyncHandler(async (req: Request, res: Response) => {
  const tokenData = req.body;
  const user = await UserModel.findOne({
    email: tokenData.email,
    password: tokenData.password,
  });

  if (!user) {
    res.status(404).json({
      message: {
        text: "We can't find you.Thank for here.",
      },
    });
    return;
  }
  const tokenPayload: TokenPayload = {
    _id: user._id,
    email: user.email,
    phone: user.phone,
    status: user.status,
  };
  const token = sign(tokenPayload, process.env.PRIVATE_KEY ?? "");
  res.status(200).json({
    message: {
      text: "Token has been created",
      token: token,
    },
  });
});

export { login };
