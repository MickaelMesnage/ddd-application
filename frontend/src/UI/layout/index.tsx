import { FC } from "react";
import { getConnectedUserSelector } from "../../adapter/connectedUser/connectedUserSelector";
import { useAppSelector } from "../../adapter/redux/hooks";
import ConnectedHeader from "../header/connectedHeader";
import NotConnectedHeader from "../header/notConnectedHeader";
import "./index.css";

const Layout: FC = ({ children }) => {
    const user = useAppSelector(getConnectedUserSelector);
    return (
        <div className="layout-container">
            {user ? <ConnectedHeader /> : <NotConnectedHeader />}
            <div className="layout-children">{children}</div>
        </div>
    );
};

export default Layout;
