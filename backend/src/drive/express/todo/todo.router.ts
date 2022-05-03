import { Request, Response, Router } from "express";
import { DeleteTodoUseCasePort } from "../../../application/todo/useCase/deleteTodo.useCase";
import { ITodoUseCase } from "../../../application/todo/useCase/Todo.usecase";
import { UpdateTodoUseCasePort } from "../../../application/todo/useCase/updateTodo";
import { TodoId, TodoSubject } from "../../../domain/todo/type";
import { authMiddleware } from "../middleware";
import RequestWithSession from "../requestWithSession";
import TodosPresenter from "./todos.presenter";

const todoRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    router.post("/", authMiddleware, async (req: RequestWithSession, res: Response) => {
        const subject = req.body.subject as TodoSubject;
        const userId = req.session.user.id;
        const todos = await todoUseCase.createTodo.execute({ subject, userId });

        res.json({ todos: TodosPresenter.present(todos) });
    });

    router.put("/", async (req: RequestWithSession, res: Response) => {
        const updateTodoUseCasePort = {
            ...req.body.todo,
            userId: req.session.user.id
        } as UpdateTodoUseCasePort;
        const todos = await todoUseCase.updateTodo.execute(updateTodoUseCasePort);

        res.json({ todos: TodosPresenter.present(todos) });
    });

    router.delete("/", async (req: RequestWithSession, res: Response) => {
        const id = req.body.id as TodoId;
        const userId = req.session.user.id;
        const todos = await todoUseCase.deleteTodo.execute({ id, userId });

        res.json({ todos: TodosPresenter.present(todos) });
    });

    router.get("/list", authMiddleware, async (req: RequestWithSession, res: Response) => {
        const userId = req.session.user.id;
        const todos = await todoUseCase.getTodos.execute(userId);

        res.json({ todos: TodosPresenter.present(todos) });
    });

    return router;
};

export default todoRouter;
