import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./ButtonStyles";

interface ButtonProps {
    title: string;
    onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

export default Button;