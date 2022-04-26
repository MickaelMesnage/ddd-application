import Todo from "../../../../domain/todo/class/todo";
import TodoList from "../../../../domain/todo/class/todoList";
import { TodoId } from "../../../../domain/todo/type";
import { TodoByIdNotFoundError } from "../../../../error/TodoByIdNotFoundError";
import ITodoRepository from "../ITodo.repository";

class InMemoryTodoRepository implements ITodoRepository {
    private _items: TodoList;

    constructor() {
        this._items = new TodoList([]);
    }

    public getTodosByUser(): Promise<TodoList> {
        return Promise.resolve(this._items);
    }

    public getTodoById(id: TodoId): Promise<Todo> {
        const todo = this._items.list.find((item: Todo) => item.id === id);
        if (!todo) throw new TodoByIdNotFoundError();

        return Promise.resolve(todo);
    }

    public updateTodo(todo: Todo): Promise<void> {
        const id = this._items.list.findIndex((item: Todo) => item.id === todo.id);
        if (id < 0) throw new TodoByIdNotFoundError();
        this._items.list[id] = todo;

        return Promise.resolve();
    }

    public createTodo(todo: Todo): Promise<void> {
        this._items.list.push(todo);

        return Promise.resolve();
    }

    public deleteTodo(todoId: TodoId): Promise<void> {
        const id = this._items.list.findIndex((item: Todo) => item.id === todoId);
        if (id < 0) throw new TodoByIdNotFoundError();
        this._items.list.splice(id, 1);

        return Promise.resolve();
    }
}

export default InMemoryTodoRepository;
