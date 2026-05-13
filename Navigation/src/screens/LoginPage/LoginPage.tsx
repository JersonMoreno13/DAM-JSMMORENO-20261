import React from "react";
import AuthTemplate from "../../components/templates/AuthTemplate/AuthTemplate";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <AuthTemplate title="LOGIN" subtitle="Create a new account">
            <LoginForm />
        </AuthTemplate>
    );
};

export default LoginPage;