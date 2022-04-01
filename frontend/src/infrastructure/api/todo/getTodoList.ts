import TodoList from "domain/todoList";
import { GET } from "../fetch";

type GetTodoListInput = void;

type GetTodoListOutput = TodoList;

const getTodoList = async (): Promise<GetTodoListOutput> => {
    const todoList = await GET<GetTodoListInput, GetTodoListOutput>(
        `${process.env.REACT_APP_API_URL}todoList`
    );

    return todoList;
};

export default getTodoList;
