import { FC } from "react";
import LogoutButtton from "../user/logoutButton";
import "./index.css";

const Header: FC = () => (
    <div className="header-container">
        <div>Clean archi app</div>
        <LogoutButtton />
    </div>
);

export default Header;
