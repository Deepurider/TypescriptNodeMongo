import mongoose, { Document, PaginateModel, Schema } from "mongoose";
import { UserStatus } from "../common/enum/user-status";
import mongoosePaginate from "mongoose-paginate-v2";
export interface User extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  status: string;
}
const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide User Email."],
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: Object.values(UserStatus),
  },
});

userSchema.plugin(mongoosePaginate);

export const UserModel = mongoose.model<User, PaginateModel<User>>(
  "User",
  userSchema
);
