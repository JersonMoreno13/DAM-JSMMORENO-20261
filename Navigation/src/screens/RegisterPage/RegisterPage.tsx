import React from "react";

import {
    Alert
} from "react-native";

import {
    useNavigation
} from "@react-navigation/native";

import {
    NativeStackNavigationProp
} from "@react-navigation/native-stack";

import { AuthStackParamList }
from "../../Routes";

import {
    AuthTemplate
} from "../../components/templates";

import {
    RegisterForm
} from "../../components/organisms";

import {
    AuthService
} from "../../core/services";

import {
    User
} from "../../core/entities";

const RegisterPage = () => {

    const navigation =
        useNavigation<
            NativeStackNavigationProp<
                AuthStackParamList
            >
        >();

    const handleRegister =
        async (user: User) => {

            try {

                await AuthService.register(
                    user
                );

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

    return (

        <AuthTemplate
            title="Registrarme"
            subtitle="Crea tu cuenta"
        >

            <RegisterForm
                onSubmit={handleRegister}
            />

        </AuthTemplate>

    );

};

export default RegisterPage;