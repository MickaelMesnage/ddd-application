import { FC } from "react";
import { Link } from "react-router-dom";
import { isConnectedUserAdminSelector } from "adapter/connectedUser/connectedUserSelector";
import { useAppSelector } from "adapter/redux/hooks";
import LogoutButtton from "../../user/logoutButton";
import "../index.css";

const ConnectedHeader: FC = () => {
    const isAdmin = useAppSelector(isConnectedUserAdminSelector);

    return (
        <div className="header-container spaced-row">
            <nav className="header-nav">
                <Link data-test-id="header-link-home" to="/">
                    Accueil
                </Link>
                <Link data-test-id="header-link-todos" to="/todos">
                    Ma todo list
                </Link>
                {isAdmin && (
                    <Link data-test-id="header-link-users" to="/users">
                        Utilisateur
                    </Link>
                )}
            </nav>
            <LogoutButtton />
        </div>
    );
};

export default ConnectedHeader;
