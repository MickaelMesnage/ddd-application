import * as fs from "fs";
import * as path from "path";
import Items from "../../../domain/todo/type/items";
import ITodoListRepository from "../ITodoList.repository";
import TodoList from "../../../domain/todo/todoList";

const PATH = path.join(__dirname, "./store.txt");

class TodoListFileSystem implements ITodoListRepository {
    private getPersistedItems = (): Items => {
        const content = fs.readFileSync(PATH).toString();
        // TODO check the content is ok
        return content ? JSON.parse(content) : [];
    };

    getTodoList(): Promise<TodoList> {
        const items = this.getPersistedItems();
        const todoList = new TodoList(items);
        return Promise.resolve(todoList);
    }
}

export default TodoListFileSystem;
