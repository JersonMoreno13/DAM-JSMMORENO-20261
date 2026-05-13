import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";

const RegisterPage = () => {
    return (
        <AuthTemplate title="REGISTER" subtitle="Create a new account">
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;