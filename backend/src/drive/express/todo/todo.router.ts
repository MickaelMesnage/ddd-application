import { Request, Response, Router } from "express";
import ITodoUseCase from "../../../application/todo/useCase/ITodo.usecase";
import TodoPort from "../../../application/todo/todo.port";
import { TodoId, TodoSubject } from "../../../domain/todo/type";
import TodoListPresenter from "./todoList.presenter";

const todoRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    router.post("/", async (req: Request, res: Response) => {
        // check if it is the todo of the user
        // or if it is admin
        const subject = req.body.subject as TodoSubject;
        await todoUseCase.createTodo.execute(subject);
        const todos = await todoUseCase.getTodos.execute();

        res.json({ todoList: TodoListPresenter.present(todos) });
    });

    router.put("/", async (req: Request, res: Response) => {
        // check if it is the todo of the user
        // or if it is admin
        const newTodo = req.body.todo as TodoPort;
        await todoUseCase.updateTodo.execute(newTodo);
        const todos = await todoUseCase.getTodos.execute();

        res.json({ todoList: TodoListPresenter.present(todos) });
    });

    router.delete("/", async (req: Request, res: Response) => {
        // check if it is the todo of the user
        // or if it is admin
        // in use case i think
        const todoId = req.body.id as TodoId;
        await todoUseCase.deleteTodo.execute(todoId);
        const todos = await todoUseCase.getTodos.execute();

        res.json({ todoList: TodoListPresenter.present(todos) });
    });

    return router;
};

export default todoRouter;
