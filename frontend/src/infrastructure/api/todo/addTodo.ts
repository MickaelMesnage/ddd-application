import TodoList from "domain/todoList";
import { POST } from "../fetch";

type AddTodoProps = {
    subject: string;
};

type AddTodoOutput = {
    todos: TodoList;
};

const addTodo = async (subject: string): Promise<TodoList> => {
    const { todos } = await POST<AddTodoProps, AddTodoOutput>(
        `${process.env.REACT_APP_API_URL}todo`,
        { subject }
    );

    return todos;
};

export default addTodo;
