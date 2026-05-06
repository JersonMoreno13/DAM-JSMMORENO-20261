import { Pressable, Text } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";

type countScreenProps = {
  label: string;
  OnPress: () => void;
};

export const CountScreen: React.FC<countScreenProps> = ({
  label,
  OnPress,
}) => {
  return (
    <Pressable
      style={stylesCountScreen.button}
      onPress={OnPress}
    >
      <Text style={stylesCountScreen.label}>
        {label}
      </Text>
    </Pressable>
  );
};