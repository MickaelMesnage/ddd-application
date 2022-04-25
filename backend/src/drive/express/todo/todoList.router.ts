import { Request, Response, Router } from "express";
import TodoPresenter from "./todo.presenter";
import ITodoUseCase from "../../../application/todo/useCase/ITodo.usecase";
import Todo from "../../../domain/todo/class/todo";

const todoListRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    router.get("/", async (req: Request, res: Response) => {
        const todos = await todoUseCase.getTodos.execute();

        res.json({ todoList: todos.map((todo: Todo) => TodoPresenter.present(todo)) });
    });

    return router;
};

export default todoListRouter;
