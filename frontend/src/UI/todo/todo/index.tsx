import { FC } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import TodoProps from "domain/todo";
import { deleteTodoAction, updateTodoAction } from "adapter/myTodoList/myTodoListAction";

const Todo: FC<TodoProps> = (props) => {
    const { subject, isChecked, id } = props;
    const dispatch = useAppDispatch();
    const onChange = async () => {
        await updateTodoAction(dispatch, { ...props, isChecked: !isChecked });
    };

    const onDelete = async () => {
        await deleteTodoAction(dispatch, id);
    };

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            {subject}
            <button onClick={onDelete}>X</button>
        </label>
    );
};

export default Todo;
