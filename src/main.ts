import dotenv from "dotenv";
import { runApp } from "./app";
import { processHandler } from "./utils/async-handler.util";
import { connectDb } from "./domain";
dotenv.config();
(async function () {
    console.clear();
    await processHandler(connectDb);
    await processHandler(runApp);
}());