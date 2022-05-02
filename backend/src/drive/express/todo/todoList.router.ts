import { Request, Response, Router } from "express";
import { ITodoUseCase } from "../../../application/todo/useCase/Todo.usecase";
import { authMiddleware } from "../middleware";
import TodoListPresenter from "./todoList.presenter";

const todoListRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    router.get("/", authMiddleware, async (req: Request, res: Response) => {
        const todoList = await todoUseCase.getTodos.execute();

        res.json({ todoList: TodoListPresenter.present(todoList) });
    });

    return router;
};

export default todoListRouter;
