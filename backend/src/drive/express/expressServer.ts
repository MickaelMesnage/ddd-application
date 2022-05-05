import express, { Express } from "express";
import session from "express-session";
import cors from "cors";
import todoRouter from "./todo/todo.router";
import bodyParser from "body-parser";
import todoListRouter from "./todo/todoList.router";
import CDrive, { CDriveDependencies } from "../CDrive";
import authRouter from "./user/auth.router";
import userRouter from "./user/user.router";

class ExpressServer extends CDrive {
    private _app: Express;

    constructor(props: CDriveDependencies) {
        super(props);
        const app = express();
        app.use(
            session({
                secret: "my-secret-for-session",
                resave: false,
                saveUninitialized: true,
                cookie: {
                    httpOnly: false,
                    secure: false,
                    sameSite: true
                }
            })
        );

        app.use(cors({ origin: "http://localhost:8080", credentials: true }));
        app.use(bodyParser.json());
        app.use("/todoList", todoListRouter(this._dependencies.todoUseCase));
        app.use("/todo", todoRouter(this._dependencies.todoUseCase));
        app.use("/auth", authRouter(this._dependencies.userUseCase));
        app.use("/user", userRouter(this._dependencies.userUseCase));

        const port = process.env.PORT;

        app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });
    }
}

export default ExpressServer;
