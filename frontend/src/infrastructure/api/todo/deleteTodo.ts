import TodoList from "domain/todoList";
import { DELETE } from "../fetch";

type DeleteTodoProps = {
    id: string;
};

type DeleteTodoOutput = {
    todos: TodoList;
};

const deleteTodo = async (id: string): Promise<TodoList> => {
    const { todos } = await DELETE<DeleteTodoProps, DeleteTodoOutput>(
        `${process.env.REACT_APP_API_URL}todo`,
        { id }
    );

    return todos;
};

export default deleteTodo;
