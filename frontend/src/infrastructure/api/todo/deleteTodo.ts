import TodoList from "domain/todoList";
import { DELETE } from "../fetch";

type DeleteTodoProps = {
    id: string;
};

type DeleteTodoOutput = {
    todoList: TodoList;
};

const deleteTodo = async (id: string): Promise<TodoList> => {
    const { todoList } = await DELETE<DeleteTodoProps, DeleteTodoOutput>(
        `${process.env.REACT_APP_API_URL}todo`,
        { id }
    );

    return todoList;
};

export default deleteTodo;
