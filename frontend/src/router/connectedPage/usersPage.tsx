import React, { FC } from "react";
import ConnectedLayout from "UI/connectedLayout";
import AddUserForm from "UI/user/addUserForm";
import Users from "UI/user/users";

const UsersPage: FC = () => (
    <ConnectedLayout>
        <h1>Gestion des utilisateurs</h1>
        <Users />
        <AddUserForm />
    </ConnectedLayout>
);

export default UsersPage;
