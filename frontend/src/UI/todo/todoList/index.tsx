import { FC, useEffect } from "react";
import { getMyTodoListAction } from "adapter/myTodoList/myTodoListAction";
import { getMyTodoListSelector } from "adapter/myTodoList/myTodoListSelector";
import { useAppDispatch, useAppSelector } from "adapter/redux/hooks";
import Todo from "../todo";
import "./index.css";

const TodoList: FC = () => {
    const todoList = useAppSelector(getMyTodoListSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getMyTodoListAction(dispatch);
    }, []);

    return (
        <div className="container">
            {todoList.map((todo) => (
                <Todo {...todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;
