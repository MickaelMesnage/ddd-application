import dotenv from "dotenv";
import ExpressAdapter from "./src/drive/expressAdapter";
import { CDriveDependencies } from "./src/drive/CDrive";
import todoUseCase from "./src/application/todo/useCase/Todo.usecase";
import InMemoryTodoRepository from "./src/driven/todo/repository/inMemory";
import InMemoryUserRepository from "./src/driven/user/repository/inMemory";
import userUseCase from "./src/application/user/useCase";
import ConsoleAdapter from "./src/drive/consoleAdapter";
import ITodoRepository from "./src/application/todo/secondary/ITodo.repository";
import IUserRepository from "./src/application/user/secondary/IUser.repository";
import FileSystemTodoRespository from "./src/driven/todo/repository/fileSystem";
import FileSystemUserRepository from "./src/driven/user/repository/fileSystem";

dotenv.config();

enum DrivenAdapterMode {
    FileSystem = "FILE_SYSTEM",
    InMemory = "IN_MEMORY"
}

const drivenAdapterMode = process.env.DRIVEN_ADAPTER;

let todoRepository: ITodoRepository;
let userRepository: IUserRepository;

if (drivenAdapterMode === DrivenAdapterMode.FileSystem) {
    todoRepository = new FileSystemTodoRespository();
    userRepository = new FileSystemUserRepository();
} else if (drivenAdapterMode === DrivenAdapterMode.InMemory) {
    todoRepository = new InMemoryTodoRepository();
    userRepository = new InMemoryUserRepository();
} else {
    console.error("Bad driven adapter in .env");
}

const driveDependencies: CDriveDependencies = {
    todoUseCase: todoUseCase(todoRepository),
    userUseCase: userUseCase(userRepository)
};

enum DriveAdapterMode {
    Express = "EXPRESS",
    Console = "CONSOLE"
}
const driveAdapterMode = process.env.DRIVE_ADAPTER;

if (driveAdapterMode === DriveAdapterMode.Express) {
    new ExpressAdapter(driveDependencies);
} else if (driveAdapterMode === DriveAdapterMode.Console) {
    new ConsoleAdapter(driveDependencies);
} else {
    console.error("Bad drive adapter in .env");
}
