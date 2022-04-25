import Todo from "../../../domain/todo/class/todo";
import TodoPresenter from "./todo.presenter";

export type TodoListPresented = Array<{
    subject: string;
    isChecked: boolean;
    id: string;
}>;

class TodoListPresenter {
    static present(todoList: Array<Todo>): TodoListPresented {
        return todoList.map((todo: Todo) => TodoPresenter.present(todo));
    }
}

export default TodoListPresenter;
