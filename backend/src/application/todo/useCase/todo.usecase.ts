import ITodoRepository from "../../../right/repository/ITodo.repository";
import CreateTodoUseCase from "./createTodo";
import GetTodosUseCase from "./getTodos.usecase";
import UpdateTodoUseCase from "./updateTodo";

const todoUseCase = (todoRepository: ITodoRepository) => ({
    getTodos: new GetTodosUseCase({ todoRepository }),
    updateTodo: new UpdateTodoUseCase({ todoRepository }),
    createTodo: new CreateTodoUseCase({ todoRepository })
});

export default todoUseCase;
