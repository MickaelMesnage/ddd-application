import dotenv from "dotenv";
import TodoFileSystemRespository from "./src/driven/repository/fileSystem/todoFileSystem.repository";
import ExpressServer from "./src/drive/express/expressServer";
import { CDriveDependencies } from "./src/drive/CDrive";
import todoUseCase from "./src/application/todo/useCase/Todo.usecase";

dotenv.config();

const todoRepository = new TodoFileSystemRespository();

const expressServerDependencies: CDriveDependencies = {
    todoUseCase: todoUseCase(todoRepository)
};

const expressServer = new ExpressServer(expressServerDependencies);
expressServer.start();
