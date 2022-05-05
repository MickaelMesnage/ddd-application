import dotenv from "dotenv";
import TodoFileSystemRespository from "./src/driven/repository/todo/fileSystem";
import ExpressServer from "./src/drive/express/expressServer";
import { CDriveDependencies } from "./src/drive/CDrive";
import todoUseCase from "./src/application/todo/useCase/Todo.usecase";
import InMemoryTodoRepository from "./src/driven/repository/todo/inMemory";
import InMemoryUserRepository from "./src/driven/user/repository/inMemory";
import userUseCase from "./src/application/user/useCase";
import ConsoleAdapter from "./src/drive/consoleAdapter";

dotenv.config();

const todoDrivenMode = process.env.TODO_DRIVEN;

const todoRepository =
    todoDrivenMode === "FILE_SYSTEM"
        ? new TodoFileSystemRespository()
        : new InMemoryTodoRepository();

const userRepository = new InMemoryUserRepository();

const expressServerDependencies: CDriveDependencies = {
    todoUseCase: todoUseCase(todoRepository),
    userUseCase: userUseCase(userRepository)
};

const driveMode = process.env.DRIVE;

if (driveMode === "EXPRESS") {
    new ExpressServer(expressServerDependencies);
} else if (driveMode === "CONSOLE") {
    new ConsoleAdapter(expressServerDependencies);
}
