import { Station } from "@/lib/types/Station";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Chip, Surface } from "react-native-paper";
import StationSearchButton from "../molecules/StationSearchButton";

export default function JourneySearch() {
  const [origin, setOrigin] = useState<Station | null>(null);
  const [destination, setDestination] = useState<Station | null>(null);

  return (
    <Surface style={styles.surface} mode="flat">
      <StationSearchButton
        label="Origin"
        displayValue={origin?.name ?? undefined}
        onStationData={setOrigin}
      />
      <StationSearchButton
        label="Destination"
        displayValue={destination?.name ?? undefined}
        onStationData={setDestination}
      />
      <ScrollView horizontal>
        <View style={styles.options}>
          <Chip icon="clock-time-four">Today, 21:37</Chip>
          <Chip icon="train">Regional transport</Chip>
          <Chip icon="bus-stop">Stopovers</Chip>
          <Chip icon="cog">Options</Chip>
        </View>
      </ScrollView>
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
