import TodoList from "domain/todoList";
import Todo from "../../../domain/todo";
import { GET } from "../fetch";

type GetMyTodoListInput = void;

type GetMyTodoListOutput = {
    todos: TodoList;
};

const getMyTodoList = async (): Promise<Array<Todo>> => {
    const { todos } = await GET<GetMyTodoListInput, GetMyTodoListOutput>(
        `${process.env.REACT_APP_API_URL}todo/list`
    );

    return todos;
};

export default getMyTodoList;
