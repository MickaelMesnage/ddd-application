import { TodoId, TodoIsChecked, TodoSubject } from "../../../domain/todo/type";
import Todo from "../../../domain/todo/class/todo";
import { UserId } from "../../../domain/user/type";

export type GetTodoByUserPort = {
    userId: UserId;
};

export type GetTodoByIdPort = {
    id: TodoId;
};

export type CreateOrUpdateTodoPort = {
    id: TodoId;
    subject: TodoSubject;
    isChecked: TodoIsChecked;
    userId: UserId;
};

export type DeleteTodoPort = {
    id: TodoId;
};

interface ITodoRepository {
    getTodosByUser(port: GetTodoByUserPort): Promise<Array<Todo>>;
    getTodoById(port: GetTodoByIdPort): Promise<Todo>;
    createTodo(port: CreateOrUpdateTodoPort): Promise<void>;
    updateTodo(port: CreateOrUpdateTodoPort): Promise<void>;
    deleteTodo(port: DeleteTodoPort): Promise<void>;
}

export default ITodoRepository;
