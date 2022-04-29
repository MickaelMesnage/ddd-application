import * as fs from "fs";
import * as path from "path";
import Todo from "../../../../domain/todo/class/todo";
import TodoList from "../../../../domain/todo/class/todoList";
import { TodoId, TodoIsChecked, TodoSubject } from "../../../../domain/todo/type";
import ITodoRepository, {
    CreateOrUpdateTodoPort,
    DeleteTodoPort,
    GetTodoByIdPort
} from "../../../../application/todo/secondary/ITodo.repository";
import { TodoByIdNotFoundError } from "../../../../error/TodoByIdNotFoundError";

const PATH = path.join(__dirname, "./store.txt");

type Item = {
    subject: TodoSubject;
    isChecked: TodoIsChecked;
    id: TodoId;
};

class TodoFileSystemRespository implements ITodoRepository {
    private getPersistedItems(): Array<Item> {
        const content = fs.readFileSync(PATH).toString();

        // TODO check the content is ok
        return content ? JSON.parse(content) : [];
    }

    private async persistItems(items: Array<Item>): Promise<void> {
        try {
            fs.writeFileSync(PATH, JSON.stringify(items));
        } catch (error) {
            throw new Error(`todo.repository persistItems: error when write file ${error}`);
        }
    }

    // TODO handle user
    public getTodosByUser(): Promise<TodoList> {
        const items = this.getPersistedItems();
        const todoList = new TodoList(items);

        return Promise.resolve(todoList);
    }

    public getTodoById(port: GetTodoByIdPort): Promise<Todo> {
        const { id } = port;
        const item = this.getPersistedItems().find((item) => item.id === id);
        if (!item) throw new TodoByIdNotFoundError();
        const todo = new Todo(item);

        return Promise.resolve(todo);
    }

    public updateTodo(port: CreateOrUpdateTodoPort): Promise<void> {
        const { id, subject, isChecked } = port;
        const items = this.getPersistedItems();
        const itemId = items.findIndex((item) => item.id === id);
        if (itemId < 0) throw new TodoByIdNotFoundError();
        items[itemId] = {
            ...items[itemId],
            subject,
            isChecked
        };
        this.persistItems(items);

        return Promise.resolve();
    }

    public createTodo(port: CreateOrUpdateTodoPort): Promise<void> {
        const items = this.getPersistedItems();
        items.push(port);
        this.persistItems(items);

        return Promise.resolve();
    }

    public deleteTodo(port: DeleteTodoPort): Promise<void> {
        const { id } = port;
        const items = this.getPersistedItems();
        const itemId = items.findIndex((item) => item.id === id);
        if (itemId < 0) throw new TodoByIdNotFoundError();
        items.splice(itemId, 1);
        this.persistItems(items);

        return Promise.resolve();
    }
}

export default TodoFileSystemRespository;
