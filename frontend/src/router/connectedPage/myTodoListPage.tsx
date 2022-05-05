import React, { FC } from "react";
import TodoCard from "UI/todo/todoCard";
import Layout from "UI/layout";

const MyTodoListPage: FC = () => (
    <Layout>
        <h1>Ma todo list</h1>
        <TodoCard />
    </Layout>
);

export default MyTodoListPage;
