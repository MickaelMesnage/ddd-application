import express, { Express } from "express";
import cors from "cors";
import todoRouter from "./todo.router";
import bodyParser from "body-parser";
import todoListRouter from "./todoList.router";
import CDrive, { CDriveDependencies } from "../CDrive";

class ExpressServer extends CDrive {
    private _app: Express;

    constructor(props: CDriveDependencies) {
        super(props);
        this.initApp();
    }

    private initApp() {
        const app = express();
        app.use(cors({ origin: "*" }));
        app.use(bodyParser.json());
        app.use("/todoList", todoListRouter(this._dependencies.todoUseCase));
        app.use("/todo", todoRouter(this._dependencies.todoUseCase));
        this._app = app;
    }

    public start() {
        const port = process.env.PORT;

        this._app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });
    }
}

export default ExpressServer;
