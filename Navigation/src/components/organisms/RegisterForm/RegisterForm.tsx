import React, {useState} from "react";
import { Button,InputField } from "../../atoms";
import { View } from "react-native";
import styles from './RegisterFormStyles'


interface RegisterFormProps {
    onSubmit : () => void;
}

const RegisterForm = ({onSubmit}:RegisterFormProps) => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <InputField
                label="FULL NAME"
                placeholder="John Doe"
                value={fullName}
                onChangeText={setFullName}
            />
            <InputField
                label="USERNAME"
                placeholder="johndoe123"
                value={username}
                onChangeText={setUsername}
            />
            <InputField
                label="EMAIL ADDRESS"
                placeholder="johndoe@example.com"
                value={email}
                onChangeText={setEmail}
            />
            <InputField
                label="DATE OF BIRTH"
                placeholder="YYYY-MM-DD"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
            />
            <InputField
                label="PASSWORD"
                placeholder="Minimum 8 chars"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <InputField
                label="CONFIRM PASSWORD"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Button title="CREATE ACCOUNT" onSubmit={onSubmit} />
        </View>
    )

}


export default RegisterForm;