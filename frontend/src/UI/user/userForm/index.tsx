import { FC, useCallback, useState } from "react";
import { UserEmail, UserIsAdmin } from "domain/user";
import Email from "domain/core/email";

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
    const [alreadySubmit, setAlreadySubmit] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onEmailChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const value = event.target.value;
            setEmail(value);
            if (Email.isValid(value)) {
                setError(false);
            } else {
                setError(true);
            }
        },
        [setEmail, setError]
    );

    const onIsAdminChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setIsAdmin(event.target.checked);
        },
        [setIsAdmin]
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setAlreadySubmit(true);
        event.preventDefault();
        if (!error) {
            await onUserSubmit({ email, isAdmin });
        }
    };

    return (
        <form className="column form" onSubmit={handleSubmit}>
            <label>
                Login
                <input type="text" value={email} onChange={onEmailChange} />
            </label>
            <label>
                <input type="checkbox" checked={isAdmin} onChange={onIsAdminChange} />
                Admin
            </label>
            {alreadySubmit && error && <div>Erreur</div>}
            <input type="submit" value="Créer" />
        </form>
    );
};

export default UserForm;
