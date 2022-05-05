import { FC } from "react";
import ConnectedHeader from "../../header/connectedHeader";
import "../index.css";

const ConnectedLayout: FC = ({ children }) => (
    <div className="layout-container">
        <ConnectedHeader />
        <div className="layout-children">{children}</div>
    </div>
);

export default ConnectedLayout;
