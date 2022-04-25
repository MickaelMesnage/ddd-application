import { FC, useCallback, useState } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import { addTodoAction } from "adapter/myTodoList/myTodoListAction";

const TodoInput: FC = () => {
    const [newTodo, setNewTodo] = useState<string>("");
    const dispatch = useAppDispatch();
    const onSubmit = async () => {
        await addTodoAction(dispatch, newTodo);
        setNewTodo("");
    };

    const onInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setNewTodo(event.target.value);
        },
        [setNewTodo]
    );

    return (
        <>
            <input type="text" value={newTodo} onChange={onInputChange} />
            <button disabled={newTodo === ""} onClick={onSubmit}>
                Ajouter
            </button>
        </>
    );
};

export default TodoInput;
