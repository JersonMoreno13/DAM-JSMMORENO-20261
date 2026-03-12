import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./CountScreen.style";

export const CountScreen = () => {

  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperation = (op: string) => {
    setFirstNumber(Number(display));
    setOperation(op);
    setDisplay("0");
  };

  const calculate = () => {
    if (firstNumber !== null && operation) {
      const secondNumber = Number(display);
      let result = 0;

      if (operation === "+") {
        result = firstNumber + secondNumber;
      }

      if (operation === "-") {
        result = firstNumber - secondNumber;
      }

      setDisplay(result.toString());
      setFirstNumber(null);
      setOperation(null);
    }
  };

  const renderButton = (value: string, onPress: () => void) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <Text style={styles.display}>{display}</Text>

      <View style={styles.row}>
        {renderButton("1", () => handleNumber("1"))}
        {renderButton("2", () => handleNumber("2"))}
        {renderButton("3", () => handleNumber("3"))}
      </View>

      <View style={styles.row}>
        {renderButton("4", () => handleNumber("4"))}
        {renderButton("5", () => handleNumber("5"))}
        {renderButton("6", () => handleNumber("6"))}
      </View>

      <View style={styles.row}>
        {renderButton("7", () => handleNumber("7"))}
        {renderButton("8", () => handleNumber("8"))}
        {renderButton("9", () => handleNumber("9"))}
      </View>

      <View style={styles.row}>
        {renderButton("0", () => handleNumber("0"))}
        {renderButton("+", () => handleOperation("+"))}
        {renderButton("-", () => handleOperation("-"))}
      </View>

      <View style={styles.row}>
        {renderButton("=", calculate)}
      </View>

    </View>
  );
};