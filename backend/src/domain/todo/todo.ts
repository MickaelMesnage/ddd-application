import { v4 as uuidv4 } from "uuid";
import ItemId from "./type/itemId";
import ItemStatus from "./type/itemStatus";
import ItemSubject from "./type/itemSubject";

type TodoProps = {
    subject: ItemSubject;
    status?: ItemStatus;
    id?: ItemId;
};

class Todo {
    private _subject: ItemSubject;
    private _status: ItemStatus;
    private readonly _id: string;

    constructor(todo: TodoProps) {
        this._subject = todo.subject;
        this._status = todo.status || ItemStatus.CHECKED;
        this._id = todo.id || uuidv4();
    }

    get subject(): ItemSubject {
        return this._subject;
    }

    get status(): ItemStatus {
        return this._status;
    }

    get id(): string {
        return this._id;
    }

    public isChecked(): boolean {
        return this._status === ItemStatus.CHECKED;
    }

    public toggleStatus(): void {
        this._status =
            this._status === ItemStatus.NOT_CHECKED ? ItemStatus.CHECKED : ItemStatus.NOT_CHECKED;
    }
}

export default Todo;
