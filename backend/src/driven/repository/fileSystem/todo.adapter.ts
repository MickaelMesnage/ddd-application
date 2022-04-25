import Todo from "../../../domain/todo/class/todo";

export type TodoAdapted = {
    subject: string;
    isChecked: boolean;
    id: string;
};

class TodoAdapter {
    static adapt(todo: Todo): TodoAdapted {
        return {
            subject: todo.subject,
            isChecked: todo.isChecked(),
            id: todo.id
        };
    }
}

export default TodoAdapter;
