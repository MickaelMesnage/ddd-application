import { Request, Response, Router } from "express";
import TodoListPresenter from "../adapter/left/todoList.presenter";
import GetMyTodoListUseCase from "../application/getMyTodoList.usecase";
import TodoListFileSystem from "../right/repository/fileSystem/todoList.repository";

const todoListRouter = Router();

todoListRouter.get("/test", (req: Request, res: Response) => {
    res.json({
        hello: "world"
    });
});

todoListRouter.get("/", async (req: Request, res: Response) => {
    const todoListRepository = new TodoListFileSystem();
    const getTodoListUseCase = new GetMyTodoListUseCase({ todoListRepository });

    const todoList = await getTodoListUseCase.execute();

    res.json(TodoListPresenter.present(todoList));
});

export default todoListRouter;
