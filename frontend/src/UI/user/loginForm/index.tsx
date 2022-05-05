import { FC, useCallback, useState } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import { loginAction } from "adapter/connectedUser/connectedUserAction";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("admin@gmail.com");

    const onEmailChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setEmail(event.target.value);
        },
        [setEmail]
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await loginAction(dispatch, email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Login :
                <input type="text" value={email} onChange={onEmailChange} />
            </label>
            <input type="submit" value="Se connecter" />
        </form>
    );
};

export default LoginForm;
