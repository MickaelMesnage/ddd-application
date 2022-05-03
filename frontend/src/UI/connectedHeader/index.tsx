import { FC } from "react";
import { Link } from "react-router-dom";
import LogoutButtton from "../user/logoutButton";
import "./index.css";

// Todo handle link if admin

const ConnectedHeader: FC = () => (
    <div className="header-container spaced-row">
        <nav className="header-nav">
            <Link to="/">Accueil</Link>
            <Link to="/todos">Ma todo list</Link>
            <Link to="/users">Utilisateur</Link>
        </nav>
        <LogoutButtton />
    </div>
);

export default ConnectedHeader;
