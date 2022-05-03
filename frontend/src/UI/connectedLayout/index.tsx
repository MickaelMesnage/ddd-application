import { FC } from "react";
import "./index.css";
import ConnectedHeader from "../connectedHeader";

const ConnectedLayout: FC = ({ children }) => (
    <div className="connected-layout-container">
        <ConnectedHeader />
        <div className="connected-layout-children">{children}</div>
    </div>
);

export default ConnectedLayout;
