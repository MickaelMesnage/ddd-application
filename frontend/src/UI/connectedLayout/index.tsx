import { FC } from "react";
import "./index.css";
import Header from "../header";

const ConnectedLayout: FC = ({ children }) => (
    <div className="connected-layout-container">
        <Header />
        <div className="connected-layout-children">{children}</div>
    </div>
);

export default ConnectedLayout;
