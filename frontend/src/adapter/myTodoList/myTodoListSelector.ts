import TodoList from "domain/todoList";
import { RootState } from "../redux/store";

export const getMyTodoListSelector = (state: RootState): TodoList => {
    return state.myTodoList.value;
};
