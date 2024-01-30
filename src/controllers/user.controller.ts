import { User, UserModel } from "../models/user";
import { asyncHandler } from "../utils/async-handler.util";

const getUsers = asyncHandler(async (req: Request, res: any | Response) => {
  res.status(200).json({
    ...(await UserModel.paginate({}, { pagination: false })),
  });
});

const registerUser = asyncHandler(async (req: Request, res: any | Response) => {
  const data = req.body as unknown as User;
  const response = await UserModel.create(data);
  res.status(200).json({
    message: response,
  });
});

const putUser = asyncHandler(
  async (req: Request | any, res: any | Response) => {
    const data = req.body as unknown as User;
    const id: string = req["params"]?._id;
    const response = await UserModel.updateOne({ _id: id }, data);
    res.status(200).json({
      message: response,
    });
  }
);

const patchUser = asyncHandler(async (req: Request, res: any | Response) => {
  const data = req.body as unknown as User;
  const response = await UserModel.create(data);
  res.status(200).json({
    message: response,
  });
});

const deleteAllUser = asyncHandler(
  async (req: Request, res: any | Response) => {
    const response = await UserModel.deleteMany();
    res.status(200).json({
      message: {
        text: "All document has been deleted",
        response: response,
      },
    });
  }
);

const deleteUser = asyncHandler(
  async (req: Request | any, res: any | Response) => {
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
  }
);

export {
  getUsers,
  registerUser,
  patchUser,
  deleteAllUser,
  deleteUser,
  putUser,
};
