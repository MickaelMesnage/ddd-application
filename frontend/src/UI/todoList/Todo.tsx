import { FC } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import TodoProps from "domain/todo";
import { updateTodoAction } from "adapter/myTodoList/myTodoListAction";

const Todo: FC<TodoProps> = (props) => {
    const { subject, isChecked } = props;
    const dispatch = useAppDispatch();
    const onChange = async () => {
        await updateTodoAction(dispatch, { ...props, isChecked: !isChecked });
    };

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            {subject}
        </label>
    );
};

export default Todo;
