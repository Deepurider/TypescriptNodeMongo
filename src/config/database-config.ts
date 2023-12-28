import mongoose from "mongoose";
export function connectToDatabase() {
  const connectionString = "mongodb://127.0.0.1:27017/databaseName";
  mongoose
    .connect(connectionString, {})
    .then((res) => {
      console.log("Database connected");
    })
    .catch((err: any) => {
      console.log(err);
    });
}
