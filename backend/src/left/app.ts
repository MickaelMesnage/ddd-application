import express from "express";
import todoListRouter from "./todoList.router";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
app.use("/todoList", todoListRouter);

export default app;
