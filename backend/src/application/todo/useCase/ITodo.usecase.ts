import ICreateTodoUseCase from "./ICreateTodo.usecase";
import IDeleteTodoUseCase from "./IDeleteTodo.usecase";
import IGetTodosUseCase from "./IGetTodos.usecase";
import IUpdateTodoUseCase from "./IUpdateTodo.usecase";

interface ITodoUseCase {
    getTodos: IGetTodosUseCase;
    updateTodo: IUpdateTodoUseCase;
    createTodo: ICreateTodoUseCase;
    deleteTodo: IDeleteTodoUseCase;
}

export default ITodoUseCase;
