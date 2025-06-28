import { StyleSheet, View } from "react-native";
import { Chip, Surface } from "react-native-paper";
import StationSearchButton from "../molecules/StationSearchButton";

export default function JourneySearch() {
  return (
    <Surface style={styles.surface} mode="flat">
      <StationSearchButton label="Origin" />
      <StationSearchButton label="Destination" />
      <View style={styles.options}>
        <Chip icon="clock-time-four">Today, 21:37</Chip>
        <Chip icon="train">Regional transport</Chip>
        <Chip icon="bus-stop">Stopovers</Chip>
        <Chip icon="cog">Options</Chip>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
  },
  options: {
    marginTop: 8,
    gap: 8,
    display: "flex",
    flexDirection: "row",
  },
});
