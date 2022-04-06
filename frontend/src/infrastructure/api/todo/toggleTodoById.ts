import TodoList from "domain/todoList";
import { POST } from "../fetch";

type ToggleTodoByIdInput = {
    todoId: string;
};

const toggleTodoById = async (todoId: string): Promise<TodoList> => {
    const myTodoList = await POST<ToggleTodoByIdInput, TodoList>(
        `${process.env.REACT_APP_API_URL}todo/toggle`,
        { todoId }
    );

    return myTodoList;
};

export default toggleTodoById;
