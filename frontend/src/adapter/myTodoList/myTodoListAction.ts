import { Dispatch } from "@reduxjs/toolkit";
import getMyTodoListUseCase from "application/myTodoList/getMyTodoList.usecase";
import { setMyTodoList } from "./myTodoListSlice";

export const getMyTodoListAction = async (dispatch: Dispatch): Promise<void> => {
    const todoList = await getMyTodoListUseCase();
    dispatch(setMyTodoList(todoList));
};
