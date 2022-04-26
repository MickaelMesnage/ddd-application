import { TodoId } from "../../../domain/todo/type";
import Todo from "../../../domain/todo/class/todo";
import TodoList from "../../../domain/todo/class/todoList";

interface ITodoRepository {
    getTodosByUser(): Promise<TodoList>;
    getTodoById(id: TodoId): Promise<Todo>;
    createTodo(todo: Todo): Promise<void>;
    updateTodo(todo: Todo): Promise<void>;
    deleteTodo(todoId: TodoId): Promise<void>;
}

export default ITodoRepository;
