import React from "react";
import { Pressable, Text } from "react-native";
import styles from './ButtonStyles'



interface ButtonProps {
    title : string;
    onSubmit : () => void;
}



const Button = ({ title, onSubmit }: ButtonProps) =>{

    return (
        <Pressable onPress={onSubmit}>
            <Text style={styles.button}>{title}</Text>
        </Pressable>
    );

};


export default Button;