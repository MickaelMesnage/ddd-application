import Todo from "./todo";
import Item from "./type/item";
import Items from "./type/items";
import TodoListLenght from "./type/todoListLength";

class TodoList {
    private _list: Array<Todo>;

    constructor(items: Items) {
        this._list = items ? items.map((item) => new Todo(item)) : [];
    }

    addItem(item: Item) {
        this._list.push(new Todo(item));
    }

    get items(): Items {
        return this._list.map((element: Todo) => ({
            subject: element.subject,
            status: element.status,
            id: element.id
        }));
    }

    get list(): Array<Todo> {
        return this._list;
    }

    get lenght(): TodoListLenght {
        return this._list.length;
    }
}

export default TodoList;
