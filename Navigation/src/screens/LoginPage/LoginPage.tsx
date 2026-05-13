import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../Routes";




const LoginPage = () => {

    const navigation = useNavigation<NavigationProp<AuthStackParamList>>();


    const hanldeLogin = () =>{
    
        console.log("Tap en iniciar sesión")
        navigation.navigate('Register')
    }

    return (
        <AuthTemplate title="login" subtitle="Inicia Sesión">
            <LoginForm onSubmit={hanldeLogin} onSignUp={hanldeLogin}></LoginForm>
        </AuthTemplate>
    )
}


export default LoginPage;