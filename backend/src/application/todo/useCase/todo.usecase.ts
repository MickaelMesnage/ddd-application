import ITodoRepository from "../../../driven/repository/todo/ITodo.repository";
import CreateTodoUseCase from "./createTodo.usecase";
import DeleteTodoUseCase from "./deleteTodo.useCase";
import GetTodosUseCase from "./getTodos.usecase";
import UpdateTodoUseCase from "./updateTodo";

const todoUseCase = (todoRepository: ITodoRepository) => ({
    getTodos: new GetTodosUseCase({ todoRepository }),
    updateTodo: new UpdateTodoUseCase({ todoRepository }),
    createTodo: new CreateTodoUseCase({ todoRepository }),
    deleteTodo: new DeleteTodoUseCase({ todoRepository })
});

export default todoUseCase;
