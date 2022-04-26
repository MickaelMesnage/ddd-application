import Todo from "../../../domain/todo/class/todo";
import TodoList from "../../../domain/todo/class/todoList";
import TodoPresenter from "./todo.presenter";

export type TodoListPresented = Array<{
    subject: string;
    isChecked: boolean;
    id: string;
}>;

class TodoListPresenter {
    static present(todoList: TodoList): TodoListPresented {
        return todoList.list.map((todo: Todo) => TodoPresenter.present(todo));
    }
}

export default TodoListPresenter;
