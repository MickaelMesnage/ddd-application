import { FC, useCallback, useState } from "react";
import { UserEmail, UserIsAdmin } from "domain/user";

type UserFormType = {
    onUserSubmit: (props: { email: UserEmail; isAdmin: UserIsAdmin }) => Promise<void>;
    defaultEmail?: UserEmail;
    defaultIsAdmin?: UserIsAdmin;
};

const UserForm: FC<UserFormType> = ({
    onUserSubmit,
    defaultEmail = "",
    defaultIsAdmin = false
}) => {
    const [email, setEmail] = useState<string>(defaultEmail);
    const [isAdmin, setIsAdmin] = useState<boolean>(defaultIsAdmin);

    const onEmailChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setEmail(event.target.value);
        },
        [setEmail]
    );

    const onIsAdminChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setIsAdmin(event.target.checked);
        },
        [setIsAdmin]
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await onUserSubmit({ email, isAdmin });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Login :
                <input type="text" value={email} onChange={onEmailChange} />
            </label>
            <label>
                <input type="checkbox" checked={isAdmin} onChange={onIsAdminChange} />
                Admin
            </label>
            <input type="submit" value="Créer" />
        </form>
    );
};

export default UserForm;
