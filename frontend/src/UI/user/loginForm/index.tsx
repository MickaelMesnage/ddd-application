import { FC, useCallback, useState } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import { loginAction } from "adapter/connectedUser/connectedUserAction";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const onEmailChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setEmail(event.target.value);
        },
        [setEmail]
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await loginAction(dispatch, email);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="column form card">
                <label>
                    Login :
                    <input
                        data-test-id="login-form-email"
                        type="text"
                        value={email}
                        onChange={onEmailChange}
                    />
                </label>
                {error && <div data-test-id="login-form-error"></div>}
                <input data-test-id="login-form-submit" type="submit" value="Se connecter" />
            </form>
            <p>
                L&apos;utilisateur admin par défaut est admin@gmail.com. Libre à vous de créer
                d&apos;autres utilisateurs ;)
            </p>
        </>
    );
};

export default LoginForm;
