import { FC } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import TodoProps from "domain/todo";

// Je peux utiliser les types du model ?
const Todo: FC<TodoProps> = ({ subject, isChecked, id }) => {
    // il vaut mieux que je passe les props en paramètre ou il faut que j'utilise un selector ?
    const dispatch = useAppDispatch();

    return (
        <label>
            <input type="checkbox" checked={isChecked} />
            {subject}
        </label>
    );
};

export default Todo;
