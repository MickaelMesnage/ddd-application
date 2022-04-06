import { Request, Response, Router } from "express";
import ITodoUseCase from "../../application/todo/useCase/ITodo.usecase";

const todoListRouter = (todoUseCase: ITodoUseCase): Router => {
    const router = Router();

    router.get("/", async (req: Request, res: Response) => {
        const todoListPresented = await todoUseCase.getTodos.execute();

        res.json({ todoList: todoListPresented });
    });

    return router;
};

export default todoListRouter;
