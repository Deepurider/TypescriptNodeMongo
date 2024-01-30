import dotenv from "dotenv";
import connectDB from "./domain";
import { runApp } from "./app";
import { processHandler } from "./utils/async-handler.util";
dotenv.config();
processHandler(connectDB);
processHandler(runApp)
