import { FC, useEffect } from "react";
import { getMyTodoListAction } from "adapter/myTodoList/myTodoListAction";
import { getMyTodoListSelector } from "adapter/myTodoList/myTodoListSelector";
import { useAppDispatch, useAppSelector } from "adapter/redux/hooks";
import Todo from "../Todo";
import "./myTodoList.css";

// const divStyle = {
//     display: "flex",
//     "flex-direction": "column"
// };

const MyTodoList: FC = () => {
    const todoList = useAppSelector(getMyTodoListSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getMyTodoListAction(dispatch);
    }, []);

    return (
        <div>
            <h1>Todolist</h1>
            <div className="container">
                {todoList.map((todo) => (
                    <Todo {...todo} key={todo.id} />
                ))}
            </div>
        </div>
    );
};

export default MyTodoList;
