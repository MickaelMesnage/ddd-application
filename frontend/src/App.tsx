import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "adapter/redux/store";
import TodoCard from "./UI/todo/todoCard";

const App: FC = () => (
    <Provider store={store}>
        <h1>Application en clean archi</h1>
        <TodoCard />
    </Provider>
);

export default App;
