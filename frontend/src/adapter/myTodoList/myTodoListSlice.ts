import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoList from "domain/todoList";

type MyTodoListState = {
    value: TodoList;
};

// Define the initial state using that type
const initialState = {
    value: []
};

export const myTodoListSlice = createSlice({
    name: "myTodoList",
    initialState,
    reducers: {
        setMyTodoList: (state: MyTodoListState, action: PayloadAction<TodoList>) => {
            state.value = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setMyTodoList } = myTodoListSlice.actions;

const myTodoListReducer = myTodoListSlice.reducer;

export default myTodoListReducer;
