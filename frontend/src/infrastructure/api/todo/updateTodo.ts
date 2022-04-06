import TodoList from "domain/todoList";
import Todo from "domain/todo";
import { PUT } from "../fetch";

type UpdateTodoProps = {
    todo: Todo;
};

type UpdateTodoOutput = {
    todoList: TodoList;
};

const updateTodo = async (todo: Todo): Promise<TodoList> => {
    const { todoList } = await PUT<UpdateTodoProps, UpdateTodoOutput>(
        `${process.env.REACT_APP_API_URL}todo`,
        { todo }
    );

    return todoList;
};

export default updateTodo;
