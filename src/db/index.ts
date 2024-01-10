import mongoose from "mongoose";
import { DB_NAME } from "../constant";

export default async function connectDB() {
  const connectionString = `${process.env.DATABASE_URI}/${DB_NAME}`;
  try {
    const connection = await mongoose.connect(connectionString, {});
    console.log("DATABASE CONNECT: " , connection.connection.host)
  } catch (error) {
    console.error("DATABASE ERROR: ", error);
    process.exit(1);
  }
}
