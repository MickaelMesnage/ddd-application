import { Request, Response, Router } from "express";
import ITodoUseCase from "../../application/todo/useCase/ITodo.usecase";
import TodoPort from "../../application/todo/todo.port";

const todoRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    // router.post("/", async (req: Request, res: Response) => {
    //     // check if it is the todo of the user
    //     // or if it is admin
    //     const subject = req.body.subject;
    //     await todoUseCase.(subject);

    //     const todoListUpdated = await todoUseCase.getTodosUseCase();

    //     res.json({ todoList: TodoListPresenter.present(todoListUpdated) });
    // });

    router.put("/", async (req: Request, res: Response) => {
        const newTodo = req.body.todo as TodoPort;
        await todoUseCase.updateTodo.execute(newTodo);
        const todoListPresented = await todoUseCase.getTodos.execute();

        res.json({ todoList: todoListPresented });
    });

    return router;
};

export default todoRouter;
