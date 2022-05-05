import React, { FC } from "react";
import AddUserForm from "UI/user/addUserForm";
import Users from "UI/user/users";
import Layout from "UI/layout";

const UsersPage: FC = () => (
    <Layout>
        <h1>Gestion des utilisateurs</h1>
        <Users />
        <AddUserForm />
    </Layout>
);

export default UsersPage;
