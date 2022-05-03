import { v4 as uuidv4 } from "uuid";
import { UserId } from "../../user/type";
import { TodoId, TodoIsChecked, TodoProps, TodoSubject } from "../type";

class Todo {
    private _subject: TodoSubject;
    private _isChecked: TodoIsChecked;
    private readonly _id: TodoId;
    private readonly _userId: UserId;

    constructor(todo: TodoProps) {
        this._subject = todo.subject;
        this._isChecked = Boolean(todo.isChecked);
        this._id = todo.id || uuidv4();
        this._userId = todo.userId;
    }

    get subject(): TodoSubject {
        return this._subject;
    }

    get isChecked(): TodoIsChecked {
        return this._isChecked;
    }

    get id(): TodoId {
        return this._id;
    }

    get userId(): UserId {
        return this._userId;
    }

    public toggleStatus(): void {
        this._isChecked = !this._isChecked;
    }

    public update(props: { subject: TodoSubject; isChecked: TodoIsChecked }) {
        this._subject = props.subject;
        this._isChecked = props.isChecked;
    }

    public belongsToUser(userId: UserId) {
        return this._userId === userId;
    }
}

export default Todo;
