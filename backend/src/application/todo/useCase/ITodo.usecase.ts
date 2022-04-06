import ICreateTodoUseCase from "./ICreateTodo.usecase";
import IGetTodosUseCase from "./IGetTodos.usecase";
import IUpdateTodoUseCase from "./IUpdateTodo.usecase";

interface ITodoUseCase {
    getTodos: IGetTodosUseCase;
    updateTodo: IUpdateTodoUseCase;
    createTodo: ICreateTodoUseCase;
}

export default ITodoUseCase;
