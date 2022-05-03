import TodoList from "domain/todoList";
import Todo from "domain/todo";
import { PUT } from "../fetch";

type UpdateTodoProps = {
    todo: Todo;
};

type UpdateTodoOutput = {
    todos: TodoList;
};

const updateTodo = async (todo: Todo): Promise<TodoList> => {
    const { todos } = await PUT<UpdateTodoProps, UpdateTodoOutput>(
        `${process.env.REACT_APP_API_URL}todo`,
        { todo }
    );

    return todos;
};

export default updateTodo;
