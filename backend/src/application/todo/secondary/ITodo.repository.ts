import { TodoId, TodoIsChecked, TodoSubject } from "../../../domain/todo/type";
import Todo from "../../../domain/todo/class/todo";
import TodoList from "../../../domain/todo/class/todoList";

export type GetTodoByIdPort = {
    id: TodoId;
};

export type CreateOrUpdateTodoPort = {
    id: TodoId;
    subject: TodoSubject;
    isChecked: TodoIsChecked;
};

export type DeleteTodoPort = {
    id: TodoId;
};

interface ITodoRepository {
    getTodosByUser(): Promise<TodoList>;
    getTodoById(port: GetTodoByIdPort): Promise<Todo>;
    createTodo(port: CreateOrUpdateTodoPort): Promise<void>;
    updateTodo(port: CreateOrUpdateTodoPort): Promise<void>;
    deleteTodo(port: DeleteTodoPort): Promise<void>;
}

export default ITodoRepository;
