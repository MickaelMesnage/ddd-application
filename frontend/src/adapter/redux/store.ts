import { configureStore } from "@reduxjs/toolkit";
import connectedUserReducer from "../connectedUser/connectedUserSlice";
import myTodoListReducer from "../myTodoList/myTodoListSlice";

const store = configureStore({
    reducer: {
        myTodoList: myTodoListReducer,
        connectedUser: connectedUserReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
