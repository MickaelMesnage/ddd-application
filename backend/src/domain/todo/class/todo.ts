import { v4 as uuidv4 } from "uuid";
import { TodoId, TodoStatus, TodoSubject } from "../type";

export type TodoProps = {
    subject: TodoSubject;
    isChecked?: boolean;
    id?: TodoId;
};

class Todo {
    private _subject: TodoSubject;
    private _status: TodoStatus;
    private readonly _id: TodoId;

    constructor(todo: TodoProps) {
        this._subject = todo.subject;
        this._status = (todo.isChecked && TodoStatus.CHECKED) || TodoStatus.NOT_CHECKED;
        this._id = todo.id || uuidv4();
    }

    get subject(): TodoSubject {
        return this._subject;
    }

    get status(): TodoStatus {
        return this._status;
    }

    get id(): TodoId {
        return this._id;
    }

    public isChecked(): boolean {
        return this._status === TodoStatus.CHECKED;
    }

    public toggleStatus(): void {
        this._status =
            this._status === TodoStatus.NOT_CHECKED ? TodoStatus.CHECKED : TodoStatus.NOT_CHECKED;
    }
}

export default Todo;
