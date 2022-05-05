import { FC } from "react";
import { Link } from "react-router-dom";
import "../index.css";

// Todo handle link if admin

const NotConnectedHeader: FC = () => (
    <div className="header-container">
        <nav className="header-nav">
            <Link to="/">Accueil</Link>
            <Link to="/login">Se connecter</Link>
        </nav>
    </div>
);

export default NotConnectedHeader;
