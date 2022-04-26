import TodoList from "../../../domain/todo/class/todoList";

interface IGetTodosUseCase {
    execute(): Promise<TodoList>;
}

export default IGetTodosUseCase;
