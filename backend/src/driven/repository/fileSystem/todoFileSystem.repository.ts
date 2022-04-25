import * as fs from "fs";
import * as path from "path";
import Todo from "../../../domain/todo/class/todo";
import { TodoId, TodoSubject } from "../../../domain/todo/type";
import ITodoRepository from "../ITodo.repository";
import TodoAdapter from "./todo.adapter";

const PATH = path.join(__dirname, "./store.txt");

type Item = {
    subject: TodoSubject;
    isChecked: boolean;
    id: TodoId;
};

class TodoFileSystemRespository implements ITodoRepository {
    private getPersistedItems = (): Array<Item> => {
        const content = fs.readFileSync(PATH).toString();

        // TODO check the content is ok
        return content ? JSON.parse(content) : [];
    };

    private persistItems = async (items: Array<Item>): Promise<void> => {
        try {
            fs.writeFileSync(PATH, JSON.stringify(items));
        } catch (error) {
            throw new Error(`todo.repository persistItems: error when write file ${error}`);
        }
    };

    // TODO handle user
    public getTodosByUser(): Promise<Array<Todo>> {
        const items = this.getPersistedItems();
        const todos = items.map((item: Item) => new Todo(item));

        return Promise.resolve(todos);
    }

    public getTodoById(id: TodoId): Promise<Todo> {
        const item = this.getPersistedItems().find((item) => item.id === id);
        if (!item) throw new Error("todo.repository getTodoById: item not found");
        const todo = new Todo(item);

        return Promise.resolve(todo);
    }

    public updateTodo(todo: Todo): Promise<void> {
        const items = this.getPersistedItems();
        const id = items.findIndex((item) => item.id === todo.id);
        if (id < 0) throw new Error("todo.repository setTodo: item not found");
        items[id] = TodoAdapter.adapt(todo);
        this.persistItems(items);

        return Promise.resolve();
    }

    public createTodo(todo: Todo): Promise<void> {
        const items = this.getPersistedItems();
        items.push(TodoAdapter.adapt(todo));
        this.persistItems(items);

        return Promise.resolve();
    }

    public deleteTodo(todoId: TodoId): Promise<void> {
        const items = this.getPersistedItems();
        const id = items.findIndex((item) => item.id === todoId);
        if (id < 0) throw new Error("todo.repository deleteTodo: item not found");
        items.splice(id, 1);
        this.persistItems(items);

        return Promise.resolve();
    }
}

export default TodoFileSystemRespository;
