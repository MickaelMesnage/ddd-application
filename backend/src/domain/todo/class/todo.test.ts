import { TodoStatus } from "../type";
import Todo from "./todo";

const DEFAULT_SUBJECT = "Default subject";

describe("Testing todo class", () => {
    test("Default status of new todo is not checked", async () => {
        const newTodo = new Todo({ subject: DEFAULT_SUBJECT });
        expect(newTodo.status).toStrictEqual(TodoStatus.NOT_CHECKED);
        expect(newTodo.isChecked()).toStrictEqual(false);
    });

    test("Default status of new todo is not checked", async () => {
        const newTodo = new Todo({ subject: DEFAULT_SUBJECT, isChecked: false });
        newTodo.toggleStatus();
        expect(newTodo.status).toStrictEqual(TodoStatus.CHECKED);
        expect(newTodo.isChecked()).toStrictEqual(true);
    });
});
