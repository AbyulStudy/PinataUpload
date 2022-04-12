import express from "express";
import indexRouter from "../route/index";
import { notFoundErrorHandler } from "../middleware/apiErrorHandler";

const app = express();

app.use("/", indexRouter);

app.use(notFoundErrorHandler);
export default app;
