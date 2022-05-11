import { FC } from "react";
import { Link } from "react-router-dom";
import "../index.css";

// Todo handle link if admin

const NotConnectedHeader: FC = () => (
    <div className="header-container">
        <nav className="header-nav">
            <Link data-test-id="header-link-not-connected-home" to="/">
                Accueil
            </Link>
            <Link data-test-id="header-link-clean-code" to="/clean-archi">
                Clean archi
            </Link>
            <Link data-test-id="header-link-login" to="/login">
                Se connecter
            </Link>
        </nav>
    </div>
);

export default NotConnectedHeader;
