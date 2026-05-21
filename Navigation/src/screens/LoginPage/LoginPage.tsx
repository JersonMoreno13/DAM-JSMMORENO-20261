import React from "react";

import {
    Alert
} from "react-native";

import {
    NavigationProp,
    useNavigation
} from "@react-navigation/native";

import { AuthStackParamList }
from "../../Routes";

import {
    AuthTemplate
} from "../../components/templates";

import {
    LoginForm
} from "../../components/organisms";

import {
    AuthService
} from "../../core/services";

interface LoginData {
    username: string;
    password: string;
}

const LoginPage = () => {

    const navigation =
        useNavigation<
            NavigationProp<AuthStackParamList>
        >();

    const handleLogin =
        async ({
            username,
            password
        }: LoginData) => {

            try {

                await AuthService.login({
                    username,
                    password
                });

                navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: "Dashboard"
                        }
                    ]
                });

            } catch (error: any) {

                Alert.alert(
                    "Error",
                    error.message
                );

            }

        };

    const handleSignUp = () => {

        navigation.navigate(
            "Register"
        );

    };

    return (

        <AuthTemplate
            title="Login"
            subtitle="Inicia Sesión"
        >

            <LoginForm
                onSubmit={handleLogin}
                onSignUp={handleSignUp}
            />

        </AuthTemplate>

    );

};

export default LoginPage;