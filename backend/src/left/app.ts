import express from "express";
import todoListRouter from "./todoList.router";

const app = express();

app.use("/todoList", todoListRouter);

export default app;
