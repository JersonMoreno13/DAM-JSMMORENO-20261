import React from "react";
import { TextInput, StyleSheet } from "react-native";

// 👇 Definimos los tipos
interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const CustomInput = ({ value, onChangeText, placeholder }: Props) => {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});