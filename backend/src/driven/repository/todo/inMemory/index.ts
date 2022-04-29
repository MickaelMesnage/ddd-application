import Todo from "../../../../domain/todo/class/todo";
import TodoList from "../../../../domain/todo/class/todoList";
import { TodoByIdNotFoundError } from "../../../../error/TodoByIdNotFoundError";
import ITodoRepository, {
    CreateOrUpdateTodoPort,
    DeleteTodoPort,
    GetTodoByIdPort
} from "../../../../application/todo/secondary/ITodo.repository";

class InMemoryTodoRepository implements ITodoRepository {
    private _items: TodoList;

    constructor() {
        this._items = new TodoList([]);
    }

    public getTodosByUser(): Promise<TodoList> {
        return Promise.resolve(this._items);
    }

    public getTodoById(port: GetTodoByIdPort): Promise<Todo> {
        const { id } = port;
        const todo = this._items.list.find((item: Todo) => item.id === id);
        if (!todo) throw new TodoByIdNotFoundError();

        return Promise.resolve(todo);
    }

    public updateTodo(port: CreateOrUpdateTodoPort): Promise<void> {
        const { id } = port;
        const itemId = this._items.list.findIndex((item: Todo) => item.id === id);
        if (itemId < 0) throw new TodoByIdNotFoundError();
        this._items.list[itemId] = new Todo(port);

        return Promise.resolve();
    }

    public createTodo(port: CreateOrUpdateTodoPort): Promise<void> {
        this._items.list.push(new Todo(port));

        return Promise.resolve();
    }

    public deleteTodo(port: DeleteTodoPort): Promise<void> {
        const { id } = port;
        const itemId = this._items.list.findIndex((item: Todo) => item.id === id);
        if (itemId < 0) throw new TodoByIdNotFoundError();
        this._items.list.splice(itemId, 1);

        return Promise.resolve();
    }
}

export default InMemoryTodoRepository;
