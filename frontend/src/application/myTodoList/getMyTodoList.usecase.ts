import TodoList from "domain/todoList";
import getMyTodoList from "infrastructure/api/todo/getMyTodoList";

const getMyTodoListUseCase = async (): Promise<TodoList> => {
    const myTodoList = await getMyTodoList();

    return myTodoList;
};

export default getMyTodoListUseCase;
