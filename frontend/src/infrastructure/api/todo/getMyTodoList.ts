import TodoList from "domain/todoList";
import Todo from "../../../domain/todo";
import { GET } from "../fetch";

type GetMyTodoListInput = void;

type GetMyTodoListOutput = {
    todoList: TodoList;
};

const getMyTodoList = async (): Promise<Array<Todo>> => {
    const { todoList } = await GET<GetMyTodoListInput, GetMyTodoListOutput>(
        `${process.env.REACT_APP_API_URL}todoList`
    );

    return todoList;
};

export default getMyTodoList;
