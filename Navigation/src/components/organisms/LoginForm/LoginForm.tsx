import React from "react";
import { Button } from "../../atoms";

interface LoginFormProps {
    onSubmit : () => void;
}


const LoginForm = () => {
    return (
        <view>
            <text>Formulario login</text>
            <Button title="Iniciar Sesion" onSubmit={}>

            </Button>
        </view>
    )

}


export default LoginForm;