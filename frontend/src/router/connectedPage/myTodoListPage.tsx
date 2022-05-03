import React, { FC } from "react";
import TodoCard from "UI/todo/todoCard";
import ConnectedLayout from "UI/connectedLayout";

const MyTodoListPage: FC = () => (
    <ConnectedLayout>
        <h1>Ma todo list</h1>
        <TodoCard />
    </ConnectedLayout>
);

export default MyTodoListPage;
