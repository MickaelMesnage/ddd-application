import { FC } from "react";
import UserProps from "domain/user";

const User: FC<UserProps> = (props) => {
    const { email, isAdmin } = props;
    // const dispatch = useAppDispatch();
    // const onChange = async () => {
    //     await updateUserAction(dispatch, { ...props, isChecked: !isChecked });
    // };

    // const onDelete = async () => {
    //     await deleteUserAction(dispatch, id);
    // };

    return (
        // <label>
        //     <input type="checkbox" checked={isChecked} onChange={onChange} />
        //     {subject}
        //     <button onClick={onDelete}>X</button>
        // </label>
        <div>{`${email}${isAdmin ? " - Admin" : ""}`}</div>
    );
};

export default User;
