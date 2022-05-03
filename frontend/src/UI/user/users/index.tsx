import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "adapter/redux/hooks";
import { getUsersAction } from "adapter/users/usersAction";
import { getUsersSelector } from "adapter/users/usersSelector";
import User from "../user";

const Users: FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(getUsersSelector);

    useEffect(() => {
        getUsersAction(dispatch);
    }, []);

    return (
        <div className="column">
            {users.map((user) => (
                <User {...user} key={user.id} />
            ))}
        </div>
    );
};

export default Users;
