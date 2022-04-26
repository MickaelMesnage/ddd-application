import dotenv from "dotenv";
import TodoFileSystemRespository from "./src/driven/repository/todo/fileSystem/todoFileSystem.repository";
import ExpressServer from "./src/drive/express/expressServer";
import { CDriveDependencies } from "./src/drive/CDrive";
import todoUseCase from "./src/application/todo/useCase/Todo.usecase";
import InMemoryTodoRepository from "./src/driven/repository/todo/inMemory/todo.repository";

dotenv.config();

const todoDrivenMode = process.env.TODO_DRIVEN;

const todoRepository =
    todoDrivenMode === "FILE_SYSTEM"
        ? new TodoFileSystemRespository()
        : new InMemoryTodoRepository();

const expressServerDependencies: CDriveDependencies = {
    todoUseCase: todoUseCase(todoRepository)
};

const expressServer = new ExpressServer(expressServerDependencies);
expressServer.start();
