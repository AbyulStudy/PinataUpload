import express from "express";
import indexRouter from "../route/index";
import apiRouter from "../route/api";
import {
  notFoundErrorHandler,
  errorHandler,
} from "../middleware/apiErrorHandler";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use(express.static("public"));
app.use("/uploadFiles", express.static("uploadFiles"));

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.use(notFoundErrorHandler);
app.use(errorHandler);
export default app;
