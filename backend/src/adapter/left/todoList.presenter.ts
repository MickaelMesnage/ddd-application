import TodoList from "../../domain/todo/class/todoList";
import { TodoId, TodoSubject } from "../../domain/todo/type";

export type TodoListPresented = Array<{
    subject: TodoSubject;
    isChecked: boolean;
    id: TodoId;
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
