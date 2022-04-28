import { TodoProps } from "../type";
import Todo from "./todo";

type TodoListProps = Array<TodoProps>;

class TodoList {
    private _list: Array<Todo>;

    constructor(todoListProps: TodoListProps) {
        this._list = todoListProps ? todoListProps.map((todo) => new Todo(todo)) : [];
    }

    addTodo(todo: Todo) {
        this._list.push(todo);
    }

    get list(): Array<Todo> {
        return this._list;
    }

    get length(): number {
        return this._list.length;
    }
}

export default TodoList;
