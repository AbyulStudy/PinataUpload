import express from "express";
import indexRouter from "../route/index";
import apiRouter from "../route/api";
import { notFoundErrorHandler } from "../middleware/apiErrorHandler";

const app = express();

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.use(notFoundErrorHandler);
export default app;
