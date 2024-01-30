import mongoose from "mongoose";
import { DB_NAME } from "../common/constants/constant";

export default async function connectDB() {
  const connectionString = `${process.env.DATABASE_URI}/${DB_NAME}`;
  const connection = await mongoose.connect(connectionString, {});
  console.log("DATABASE CONNECT: ", connection.connection.host);
}
