import { Request, Response, Router } from "express";
import { DeleteTodoUseCasePort } from "../../../application/todo/useCase/deleteTodo.useCase";
import { ITodoUseCase } from "../../../application/todo/useCase/Todo.usecase";
import { UpdateTodoUseCasePort } from "../../../application/todo/useCase/updateTodo";
import { TodoId, TodoSubject } from "../../../domain/todo/type";
import TodoListPresenter from "./todoList.presenter";

const todoRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    router.post("/", async (req: Request, res: Response) => {
        // check if it is the todo of the user
        // or if it is admin
        const subject = req.body.subject as TodoSubject;
        await todoUseCase.createTodo.execute({ subject });
        const todoList = await todoUseCase.getTodos.execute();

        res.json({ todoList: TodoListPresenter.present(todoList) });
    });

    router.put("/", async (req: Request, res: Response) => {
        // check if it is the todo of the user
        // or if it is admin
        const updateTodoUseCasePort = req.body.todo as UpdateTodoUseCasePort;
        await todoUseCase.updateTodo.execute(updateTodoUseCasePort);
        const todoList = await todoUseCase.getTodos.execute();

        res.json({ todoList: TodoListPresenter.present(todoList) });
    });

    router.delete("/", async (req: Request, res: Response) => {
        // check if it is the todo of the user
        // or if it is admin
        // in use case i think
        const id = req.body.id as TodoId;
        await todoUseCase.deleteTodo.execute({ id });
        const todoList = await todoUseCase.getTodos.execute();

        res.json({ todoList: TodoListPresenter.present(todoList) });
    });

    return router;
};

export default todoRouter;
