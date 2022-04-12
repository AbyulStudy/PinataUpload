import express from "express";
import indexRouter from "../route/index";

const app = express();

app.use("/", indexRouter);
export default app;
