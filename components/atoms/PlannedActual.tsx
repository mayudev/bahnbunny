import { PlannedActualSet } from "@/lib/types/misc";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

type Props<T> = {
  entry: PlannedActualSet<T>;
};

export default function PlannedActual<T extends string | number>({
  entry,
}: Props<T>) {
  const theme = useTheme();
  return (
    <View>
      <Text
        variant="titleMedium"
        style={{
          textDecorationLine: "line-through",
          color: theme.colors.error,
        }}
      >
        {entry.planned}
      </Text>
      <Text variant="titleMedium">{entry.actual}</Text>
    </View>
  );
}
