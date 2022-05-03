import Todo from "../../../../domain/todo/class/todo";
import { TodoByIdNotFoundError } from "../../../../error/TodoByIdNotFoundError";
import ITodoRepository, {
    CreateOrUpdateTodoPort,
    DeleteTodoPort,
    GetTodoByIdPort
} from "../../../../application/todo/secondary/ITodo.repository";

class InMemoryTodoRepository implements ITodoRepository {
    private _items: Array<Todo>;

    constructor() {
        this._items = [];
    }

    public getTodosByUser(): Promise<Array<Todo>> {
        return Promise.resolve(this._items);
    }

    public getTodoById(port: GetTodoByIdPort): Promise<Todo> {
        const { id } = port;
        const todo = this._items.find((item: Todo) => item.id === id);
        if (!todo) throw new TodoByIdNotFoundError();

        return Promise.resolve(todo);
    }

    public updateTodo(port: CreateOrUpdateTodoPort): Promise<void> {
        const { id } = port;
        const itemId = this._items.findIndex((item: Todo) => item.id === id);
        if (itemId < 0) throw new TodoByIdNotFoundError();
        this._items[itemId] = new Todo(port);

        return Promise.resolve();
    }

    public createTodo(port: CreateOrUpdateTodoPort): Promise<void> {
        this._items.push(new Todo(port));

        return Promise.resolve();
    }

    public deleteTodo(port: DeleteTodoPort): Promise<void> {
        const { id } = port;
        const itemId = this._items.findIndex((item: Todo) => item.id === id);
        if (itemId < 0) throw new TodoByIdNotFoundError();
        this._items.splice(itemId, 1);

        return Promise.resolve();
    }
}

export default InMemoryTodoRepository;
