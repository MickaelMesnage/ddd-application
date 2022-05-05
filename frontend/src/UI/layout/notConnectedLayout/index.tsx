import { FC } from "react";
import "../index.css";
import NotConnectedHeader from "../../header/notConnectedHeader";

const NotConnectedLayout: FC = ({ children }) => (
    <div className="layout-container">
        <NotConnectedHeader />
        <div className="layout-children">{children}</div>
    </div>
);

export default NotConnectedLayout;
