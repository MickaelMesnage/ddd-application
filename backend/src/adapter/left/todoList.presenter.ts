import TodoList from "../../domain/todo/todoList";
import ItemSubject from "../../domain/todo/type/itemSubject";
import TodoListLenght from "../../domain/todo/type/todoListLength";

export type TodoListPresented = {
    items: Array<{
        subject: ItemSubject;
        isChecked: boolean;
        id: string;
    }>;
    length: TodoListLenght;
};

export class TodoListPresenter {
    static present(todoList: TodoList): TodoListPresented {
        return {
            items: todoList.list.map((todo) => ({
                subject: todo.subject,
                isChecked: todo.isChecked(),
                id: todo.id
            })),
            length: todoList.lenght
        };
    }
}

export default TodoListPresenter;
