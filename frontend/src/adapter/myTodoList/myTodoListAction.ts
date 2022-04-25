import { Dispatch } from "@reduxjs/toolkit";
import Todo from "domain/todo";
import updateTodo from "infrastructure/api/todo/updateTodo";
import { setMyTodoList } from "./myTodoListSlice";
import getMyTodoList from "infrastructure/api/todo/getMyTodoList";
import addTodo from "infrastructure/api/todo/addTodo";
import deleteTodo from "infrastructure/api/todo/deleteTodo";

export const getMyTodoListAction = async (dispatch: Dispatch): Promise<void> => {
    const todoList = await getMyTodoList();
    dispatch(setMyTodoList(todoList));
};

export const updateTodoAction = async (dispatch: Dispatch, todo: Todo): Promise<void> => {
    const todoListUpdated = await updateTodo(todo);
    dispatch(setMyTodoList(todoListUpdated));
};

export const addTodoAction = async (dispatch: Dispatch, subject: string): Promise<void> => {
    const todoListUpdated = await addTodo(subject);
    dispatch(setMyTodoList(todoListUpdated));
};

export const deleteTodoAction = async (dispatch: Dispatch, todoId: string): Promise<void> => {
    const todoListUpdated = await deleteTodo(todoId);
    dispatch(setMyTodoList(todoListUpdated));
};
