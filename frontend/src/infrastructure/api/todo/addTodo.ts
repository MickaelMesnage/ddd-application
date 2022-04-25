import TodoList from "domain/todoList";
import { POST } from "../fetch";

type AddTodoProps = {
    subject: string;
};

type AddTodoOutput = {
    todoList: TodoList;
};

const addTodo = async (subject: string): Promise<TodoList> => {
    const { todoList } = await POST<AddTodoProps, AddTodoOutput>(
        `${process.env.REACT_APP_API_URL}todo`,
        { subject }
    );

    return todoList;
};

export default addTodo;
