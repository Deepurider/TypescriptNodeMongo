import { json } from "body-parser";
import express from "express";
import appRouter from "./routes/index.routes";
import cors, { CorsOptions } from "cors";
import session from "express-session";
import { apiRequestLogger } from "./middlewares/app-logger.middleware";

const runApp = async () => {
  const corsConfig: CorsOptions = {
    origin: process.env?.ORIGIN_ALLOW?.split(",") ?? "http://localhost:4200",
  };
  const app = express();
  app.use(cors(corsConfig));
  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: true,
    })
  );
  app.use(json());
  app.use(apiRequestLogger);
  app.use("/api/v1", appRouter);

  const port = parseInt((process.env.PORT ?? 3000).toString()) || 3000;
  await app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${port}`);
  });
};


export { runApp }