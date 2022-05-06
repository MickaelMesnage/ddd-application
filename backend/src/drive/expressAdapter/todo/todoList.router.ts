import { Response, Router } from "express";
import { ITodoUseCase } from "../../../application/todo/useCase/Todo.usecase";
import { authMiddleware } from "../middleware";
import RequestWithSession from "../requestWithSession";
import TodosPresenter from "./todos.presenter";

const todoListRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    router.get("/", authMiddleware, async (req: RequestWithSession, res: Response) => {
        const userId = req.session.user.id;
        const todos = await todoUseCase.getTodos.execute(userId);

        res.json({ todos: TodosPresenter.present(todos) });
    });

    return router;
};

export default todoListRouter;
