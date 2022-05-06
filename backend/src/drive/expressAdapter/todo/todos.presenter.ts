import Todo from "../../../domain/todo/class/todo";
import TodoPresenter from "./todo.presenter";

export type TodosPresented = Array<{
    subject: string;
    isChecked: boolean;
    id: string;
}>;

class TodosPresenter {
    static present(todos: Array<Todo>): TodosPresented {
        return todos.map((todo: Todo) => TodoPresenter.present(todo));
    }
}

export default TodosPresenter;
