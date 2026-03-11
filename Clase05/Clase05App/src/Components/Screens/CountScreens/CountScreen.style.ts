import { StyleSheet } from "react-native";
import { colors, spacing } from "../../../themes";

export const stylesCountScreen = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: "center",
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});