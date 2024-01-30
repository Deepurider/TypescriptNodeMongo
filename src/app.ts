import { json } from "body-parser";
import express from "express";
import appRouter from "./routes/index.routes";
import cors, { CorsOptions } from "cors";

export const runApp = async () => {
  const corsConfig: CorsOptions = {
    origin: process.env?.ORIGIN_ALLOW?.split(",") ?? "http://localhost:4200",
  };
  const app = express();
  app.use(cors(corsConfig));
  app.use(json());
  app.use("/api/v1", appRouter);

  const port = parseInt((process.env.PORT ?? 3000).toString()) || 3000;
  app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${port}`);
  });
};
