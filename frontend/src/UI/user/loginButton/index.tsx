import { FC, useCallback, useState } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import { loginAction } from "adapter/connectedUser/connectedUserAction";

const LoginButton: FC = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");

    const onInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setEmail(event.target.value);
        },
        [setEmail]
    );

    const onLogin = async () => {
        await loginAction(dispatch, email);
    };

    return (
        <>
            <label>
                Email
                <input type="text" value={email} onChange={onInputChange} />
            </label>
            <button onClick={onLogin}>Se connecter</button>
        </>
    );
};

export default LoginButton;
