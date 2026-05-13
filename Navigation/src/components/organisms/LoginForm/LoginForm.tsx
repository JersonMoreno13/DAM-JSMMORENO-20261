import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button, InputField } from "../../atoms";
import styles from "./LoginFormStyles";

interface LoginFormProps {
    onSubmit: () => void;
    onSignUp: () => void;
}

const LoginForm = ({ onSubmit, onSignUp }: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <InputField
                label="USERNAME"
                placeholder="johndoe"
                value={username}
                onChangeText={setUsername}
            />
            <InputField
                label="PASSWORD"
                placeholder="Minimum 8 chars"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>
            <Button title="LOGIN" onSubmit={onSubmit} />
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity onPress={onSignUp}>
                    <Text style={styles.signUpLink}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginForm;