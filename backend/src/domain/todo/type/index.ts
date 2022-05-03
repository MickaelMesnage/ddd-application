import { UserId } from "../../user/type";

export type TodoId = string;

export enum TodoStatus {
    NOT_CHECKED = "NOT-CHECKED",
    CHECKED = "CHECKED"
}

export type TodoSubject = string;

export type TodoIsChecked = boolean;

export type TodoProps = {
    subject: TodoSubject;
    isChecked?: TodoIsChecked;
    id?: TodoId;
    userId: UserId;
};
