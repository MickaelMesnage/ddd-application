import { FC } from "react";
import TodoList from "../todoList";
import TodoInput from "../todoInput";
import "./index.css";

const TodoCard: FC = () => (
    <div className="todo-container">
        <TodoList />
        <TodoInput />
    </div>
);

export default TodoCard;
