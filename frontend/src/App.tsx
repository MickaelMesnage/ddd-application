import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "adapter/redux/store";
import MyTodoList from "UI/todoList/myTodoList/MyTodoList";

const App: FC = () => (
    <Provider store={store}>
        <h1>Hello todolist</h1>
        <h2>My todo list</h2>
        <MyTodoList />
    </Provider>
);

export default App;
