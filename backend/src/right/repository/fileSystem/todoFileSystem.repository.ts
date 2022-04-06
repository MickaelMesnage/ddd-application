import * as fs from "fs";
import * as path from "path";
import Todo from "../../../domain/todo/class/todo";
import { TodoId, TodoStatus, TodoSubject } from "../../../domain/todo/type";
import ITodoRepository from "../ITodo.repository";

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
    getTodosByUser(): Promise<Array<Todo>> {
        const items = this.getPersistedItems();
        const todos = items.map((item: Item) => new Todo(item));

        return Promise.resolve(todos);
    }

    getTodoById(id: TodoId): Promise<Todo> {
        const item = this.getPersistedItems().find((item) => item.id === id);
        if (!item) throw new Error("todo.repository getTodoById: item not found");
        const todo = new Todo(item);

        return Promise.resolve(todo);
    }

    updateTodo(todo: Todo): Promise<void> {
        const items = this.getPersistedItems();
        const id = items.findIndex((item) => item.id === todo.id);
        if (id < 0) throw new Error("todo.repository setTodo: item not found");
        items[id] = {
            subject: todo.subject,
            isChecked: todo.status === TodoStatus.CHECKED,
            id: todo.id
        };
        console.log("aaa", items);
        this.persistItems(items);

        return Promise.resolve();
    }

    createTodo(todo: Todo): Promise<void> {
        const items = this.getPersistedItems();
        items.push({
            subject: todo.subject,
            isChecked: todo.status === TodoStatus.CHECKED,
            id: todo.id
        });
        this.persistItems(items);

        return Promise.resolve();
    }
}

export default TodoFileSystemRespository;
