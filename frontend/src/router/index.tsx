import { FC } from "react";
import { useAppSelector } from "adapter/redux/hooks";
import { getConnectedUserSelector } from "adapter/connectedUser/connectedUserSelector";
import ConnectedRouter from "./connectedRouter";
import NotConnectedRouter from "./notConnectedRouter";

const Router: FC = () => {
    const user = useAppSelector(getConnectedUserSelector);

    return <div>{user ? <ConnectedRouter /> : <NotConnectedRouter />}</div>;
};

export default Router;
