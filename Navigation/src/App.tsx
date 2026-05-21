import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "./Routes";

import {
    LoginPage,
    RegisterPage,
    DashboardPage,
    RegisterProductPage
} from "./screens";

import AuthRepository from "./core/repositories/AuthRepository/AuthRepository";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const App = () => {

    const [initialRoute, setInitialRoute] =
        useState<keyof AuthStackParamList | null>(null);

    useEffect(() => {
        checkSession();
    }, []);

    const checkSession = async () => {

        try {

            const user =
                await AuthRepository.get();

            if (user) {
                setInitialRoute("Dashboard");
            } else {
                setInitialRoute("Login");
            }

        } catch {

            setInitialRoute("Login");

        }

    };

    if (!initialRoute) {
        return null;
    }

    return (
        <SafeAreaProvider>

            <NavigationContainer>

                <Stack.Navigator
                    initialRouteName={initialRoute}
                    screenOptions={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: "#fff",
                        },
                    }}
                >

                    <Stack.Screen
                        name="Login"
                        component={LoginPage}
                    />

                    <Stack.Screen
                        name="Register"
                        component={RegisterPage}
                    />

                    <Stack.Screen
                        name="Dashboard"
                        component={DashboardPage}
                    />

                    <Stack.Screen
                        name="RegisterProduct"
                        component={RegisterProductPage}
                    />

                </Stack.Navigator>

            </NavigationContainer>

        </SafeAreaProvider>
    );
};

export default App;