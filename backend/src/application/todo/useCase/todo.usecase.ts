import ITodoRepository from "../secondary/ITodo.repository";
import CreateTodoUseCase, { ICreateTodoUseCase } from "./createTodo.usecase";
import DeleteTodoUseCase, { IDeleteTodoUseCase } from "./deleteTodo.useCase";
import GetTodosUseCase, { IGetTodosUseCase } from "./getTodos.usecase";
import UpdateTodoUseCase, { IUpdateTodoUseCase } from "./updateTodo";

export interface ITodoUseCase {
    getTodos: IGetTodosUseCase;
    updateTodo: IUpdateTodoUseCase;
    createTodo: ICreateTodoUseCase;
    deleteTodo: IDeleteTodoUseCase;
}

const todoUseCase = (todoRepository: ITodoRepository) => ({
    getTodos: new GetTodosUseCase({ todoRepository }),
    updateTodo: new UpdateTodoUseCase({ todoRepository }),
    createTodo: new CreateTodoUseCase({ todoRepository }),
    deleteTodo: new DeleteTodoUseCase({ todoRepository })
});

export default todoUseCase;
