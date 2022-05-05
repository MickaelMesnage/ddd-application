import React, { FC } from "react";
import LoginForm from "UI/user/loginForm";
import Layout from "UI/layout";

const LoginPage: FC = () => (
    <Layout>
        <h1>Page de connexion</h1>
        <LoginForm />
    </Layout>
);

export default LoginPage;
