import { Dispatch } from "@reduxjs/toolkit";
import Todo from "domain/todo";
import updateTodo from "infrastructure/api/todo/updateTodo";
import toggleTodoById from "infrastructure/api/todo/toggleTodoById";
import { setMyTodoList } from "./myTodoListSlice";
import getMyTodoList from "../../infrastructure/api/todo/getMyTodoList";

export const getMyTodoListAction = async (dispatch: Dispatch): Promise<void> => {
    const todoList = await getMyTodoList();
    dispatch(setMyTodoList(todoList));
};

export const updateTodoAction = async (dispatch: Dispatch, todo: Todo): Promise<void> => {
    const todoListUpdated = await updateTodo(todo);
    dispatch(setMyTodoList(todoListUpdated));
};
