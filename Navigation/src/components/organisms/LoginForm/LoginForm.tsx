import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Button from "../../atoms/Button/Button";
import { styles } from "./LoginFormStyles";
import { AuthStackParamList } from "../../../Routes";

type LoginFormNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginForm = () => {
    const navigation = useNavigation<LoginFormNavigationProp>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        console.log('Login:', { username, password });
    };

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="johndoe"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                    />
                </View>
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="••••••••"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <Pressable 
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Text style={styles.eyeIconText}>
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </Text>
                    </Pressable>
                </View>
            </View>

            <Pressable style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>
                    FORGOT PASSWORD?
                </Text>
            </Pressable>

            <View style={styles.loginButton}>
                <Button title="LOGIN" onPress={handleLogin} />
            </View>

            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <Pressable onPress={handleNavigateToRegister}>
                    <Text style={styles.signUpLink}>SIGN UP</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginForm;