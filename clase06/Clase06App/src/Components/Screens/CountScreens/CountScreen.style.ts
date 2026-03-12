import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2"
  },

  display: {
    fontSize: 40,
    marginBottom: 30,
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    textAlign: "right",
    borderRadius: 10
  },

  row: {
    flexDirection: "row",
    marginBottom: 10
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    width: 70,
    alignItems: "center"
  },

  buttonText: {
    fontSize: 22,
    color: "white"
  }

});