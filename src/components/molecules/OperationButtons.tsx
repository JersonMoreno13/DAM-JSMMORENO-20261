import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomButton } from "../atoms";

// 👇 Definimos los tipos
interface Props {
  onAdd: () => void;
  onSubtract: () => void;
  onMultiply: () => void;
  onDivide: () => void;
}

export const OperationButtons = ({
  onAdd,
  onSubtract,
  onMultiply,
  onDivide,
}: Props) => {
  return (
    <View style={styles.container}>
      <CustomButton title="+" onPress={onAdd} />
      <CustomButton title="-" onPress={onSubtract} />
      <CustomButton title="×" onPress={onMultiply} />
      <CustomButton title="÷" onPress={onDivide} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});