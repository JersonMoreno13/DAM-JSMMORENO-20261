import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./InputFieldStyles";

interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry? : boolean;
}

const InputField = ({ label, placeholder, value, onChangeText }: InputFieldProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#aaa"
            />
        </View>
    );
};

export default InputField;