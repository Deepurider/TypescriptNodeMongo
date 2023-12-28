import mongoose from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
}

interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
}

interface IStudentModel extends mongoose.Model<UserDoc> {
  build(user: IUser): UserDoc;
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: false,
  },
  lastName: {
    type: String,
    require: false,
  },
});

userSchema.statics.build = (user: IUser) => {
  return new User(user);
};
const User = mongoose.model<UserDoc, IStudentModel>("User", userSchema);
export { User };
