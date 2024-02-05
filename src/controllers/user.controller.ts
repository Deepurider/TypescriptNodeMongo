import { User, UserModel } from "../models/user";
import { asyncHandler } from "../utils/async-handler.util";
import { Request, Response } from "express";

const getUsers = asyncHandler(async (req: Request | any, res: Response) => {
  res.status(200).json({
    ...(await UserModel.paginate({}, { pagination: false })),
  });
});

const getUserById = asyncHandler(async (req: Request | any, res: Response) => {
  const users = await UserModel.findById(req["params"]?._id);
  res.status(200).json({
    users,
  });
});

const postUser = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body as unknown as User;
  const response = await UserModel.create(data);
  res.status(200).json({
    message: response,
  });
});

const putUser = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body as unknown as User;
  const id: string = req["params"]?._id;
  const response = await UserModel.updateOne({ _id: id }, data);
  res.status(200).json({
    message: response,
  });
});

const patchUser = asyncHandler(async (req: Request, res: Response) => {
  const data = req.body as unknown as User;
  const response = await UserModel.create(data);
  res.status(200).json({
    message: response,
  });
});

const deleteAllUser = asyncHandler(async (req: Request, res: Response) => {
  const response = await UserModel.deleteMany();
  res.status(200).json({
    message: {
      text: "All document has been deleted",
      response: response,
    },
  });
});

const deleteUser = asyncHandler(async (req: Request | any, res: Response) => {
  const id: string = req["params"]?._id;
  const response = await UserModel.deleteOne({
    _id: id,
  });
  res.status(200).json({
    message: {
      text: "Document has been deleted",
      response: response,
    },
  });
});

export {
  getUsers,
  getUserById,
  postUser,
  patchUser,
  deleteAllUser,
  deleteUser,
  putUser,
};
