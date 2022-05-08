import { FC } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import { UserEmail, UserIsAdmin } from "domain/user";
import { addUserAction } from "adapter/users/usersAction";
import UserForm from "../userForm";

type OnUserSubmitInput = { email: UserEmail; isAdmin: UserIsAdmin };

const AddUserForm: FC = () => {
    const dispatch = useAppDispatch();

    const onUserSubmit = async (input: OnUserSubmitInput) => {
        const { email, isAdmin } = input;
        await addUserAction(dispatch, { email, isAdmin });
    };

    return (
        <div className="card">
            <UserForm onUserSubmit={onUserSubmit} />
        </div>
    );
};

export default AddUserForm;
