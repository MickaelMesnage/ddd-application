import { TodoId } from "../../domain/todo/type";
import Todo from "../../domain/todo/class/todo";

interface ITodoRepository {
    getTodosByUser(): Promise<Array<Todo>>;
    getTodoById(id: TodoId): Promise<Todo>;
    createTodo(todo: Todo): Promise<void>;
    updateTodo(todo: Todo): Promise<void>;
    deleteTodo(todoId: TodoId): Promise<void>;
}

export default ITodoRepository;
