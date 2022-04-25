import { FC } from "react";
import TodoList from "../todoList";
import TodoInput from "../todoInput";

const TodoCard: FC = () => (
    <>
        <h2>Ma liste de todo</h2>
        <TodoList />
        <TodoInput />
    </>
);

export default TodoCard;
