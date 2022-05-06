import Todo from "../../../domain/todo/class/todo";

export type TodoPresented = {
    subject: string;
    isChecked: boolean;
    id: string;
};

class TodoPresenter {
    static present(todo: Todo): TodoPresented {
        return {
            subject: todo.subject,
            isChecked: todo.isChecked,
            id: todo.id
        };
    }
}

export default TodoPresenter;
