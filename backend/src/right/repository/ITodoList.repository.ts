import TodoList from "../../domain/todo/todoList";

interface ITodoListRepository {
    getTodoList(): Promise<TodoList>;
}

export default ITodoListRepository;
