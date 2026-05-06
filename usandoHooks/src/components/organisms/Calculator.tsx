import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { CustomInput } from "../atoms";
import { OperationButtons } from "../molecules";
import { colors } from "../../themes/colors";
import { space } from "../../themes/space";

export const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const parseNumbers = () => {
    return [parseFloat(num1), parseFloat(num2)];
  };

  const suma = () => {
    const [a, b] = parseNumbers();
    setResult(a + b);
  };

  const resta = () => {
    const [a, b] = parseNumbers();
    setResult(a - b);
  };

  const multiplicacion = () => {
    const [a, b] = parseNumbers();
    setResult(a * b);
  };

const division = () => {
  const [a, b] = parseNumbers();
  if (b === 0) {
    setResult(null);
    Alert.alert("Error", "No se puede dividir por cero");
    return;
  }
  setResult(a / b);
};

  useEffect(() => {
    if (result !== null) {
      console.log("Resultado actualizado:", result);
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <CustomInput
        value={num1}
        placeholder="Número 1"
        onChangeText={setNum1}
      />

      <CustomInput
        value={num2}
        placeholder="Número 2"
        onChangeText={setNum2}
      />

      <OperationButtons
        onAdd={suma}
        onSubtract={resta}
        onMultiply={multiplicacion}
        onDivide={division}
      />

      <Text style={styles.result}>
        Resultado: {result !== null ? result : "-"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: space.lg,
  },
  title: {
    fontSize: 28,
    color: colors.text,
    fontWeight: "bold",
    marginBottom: space.lg,
  },
  result: {
    fontSize: 22,
    color: colors.secondary,
    marginTop: space.lg,
    fontWeight: "bold",
  },
});