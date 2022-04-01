import TodoList from "domain/todoList";
import getTodoList from "infrastructure/api/todo/getTodoList";

const getMyTodoListUseCase = async (): Promise<TodoList> => {
    const myTodoList = await getTodoList();

    return myTodoList;
};

export default getMyTodoListUseCase;
