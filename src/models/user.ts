import mongoose from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  contacts: IContact[];
}

interface IContact {
  title: string;
  addresses: IAddress[];
}

interface IAddress {
  addressLine1: string;
  addressLine2: string;
}

interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  contacts: ContactDoc[];
}

interface ContactDoc extends mongoose.Document {
  title: string;
  addresses: AddressDoc[];
}

interface AddressDoc extends mongoose.Document {
  addressLine1: string;
  addressLine2: string;
}

interface IStudentModel extends mongoose.Model<UserDoc> {
  build(user: IUser): UserDoc;
}

const addressSchema = new mongoose.Schema<IAddress>({
  addressLine1: {
    type: String,
    required: false,
  },
  addressLine2: {
    type: String,
    required: false,
  },
});

const contactSchema = new mongoose.Schema<IContact>({
  addresses:[addressSchema],
  title: {
    type: String,
    required: false
  }
});

const userSchema = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    require: false,
  },
  lastName: {
    type: String,
    require: false,
  },
  contacts:[contactSchema]
});

userSchema.statics.build = (user: IUser) => {
  console.log(user);
  return new User(user);
};
const User = mongoose.model<any, IStudentModel>("User", userSchema);
export { User };
