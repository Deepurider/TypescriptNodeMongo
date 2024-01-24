import mongoose, { Document, PaginateModel, Schema } from "mongoose";
import { UserStatus } from "../common/enum/user-status";
import mongoosePaginate from "mongoose-paginate-v2";
export interface User extends Document {
  Name: string;
  Email: string;
  Phone: string;
  Password: string;
  Status: string;
}
const userSchema = new Schema<User>({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: [true, "Please Provide User Email."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  Phone: {
    type: String,
    required: true,
    maxlength: 10,
  },
  Password: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
    enum: Object.values(UserStatus).filter((x) => typeof x === "string"),
  },
});

userSchema.plugin(mongoosePaginate);

export const UserModel = mongoose.model<User, PaginateModel<User>>(
  "User",
  userSchema
);
