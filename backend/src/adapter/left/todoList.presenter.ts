import TodoList from "../../domain/todo/todoList";
import ItemSubject from "../../domain/todo/type/itemSubject";

export type TodoListPresented = Array<{
    subject: ItemSubject;
    isChecked: boolean;
    id: string;
}>;

export class TodoListPresenter {
    static present(todoList: TodoList): TodoListPresented {
        return todoList.list.map((todo) => ({
            subject: todo.subject,
            isChecked: todo.isChecked(),
            id: todo.id
        }));
    }
}

export default TodoListPresenter;
