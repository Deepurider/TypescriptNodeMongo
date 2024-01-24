import express from "express";
import { json } from "body-parser";
import connectDB from "./db";
import dotenv from "dotenv";

dotenv.config();
connectDB();
const app = express();

app.on("error", (error: any) => {
  console.log("Error: ", error);
});
app.listen(3000, () => {
  console.log("Server is listening  on port 3000");
});
app.use(json());

// routes imports
import userRouter from "./routes/user.routes";

// routes declarations
app.use("/api/v1/users", userRouter);

export { app };
