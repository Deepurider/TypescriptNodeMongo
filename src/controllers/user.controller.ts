import { User, UserModel } from "../models/user";
import { asyncHandler } from "../utils/async-handler.util";

const getUsers = asyncHandler(async (req: Request, res: any | Response) => {
  res.status(200).json({
    ...(await UserModel.paginate()),
  });
});

const registerUser = asyncHandler(async (req: Request, res: any | Response) => {
  const data = req.body as unknown as User;
  const response = await UserModel.create(data);
  res.status(200).json({
    message: response,
  });
});

export { getUsers, registerUser };
