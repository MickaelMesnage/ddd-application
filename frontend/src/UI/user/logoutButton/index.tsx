import { FC } from "react";
import { useAppDispatch } from "adapter/redux/hooks";
import { logoutAction } from "adapter/connectedUser/connectedUserAction";

const LogoutButtton: FC = () => {
    const dispatch = useAppDispatch();

    const onLogout = async () => {
        await logoutAction(dispatch);
    };

    return <button onClick={onLogout}>Se déconnecter</button>;
};

export default LogoutButtton;
