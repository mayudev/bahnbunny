import { getDepartures } from "@/lib/api/driver/vendo/departures";
import { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { IconButton, List, Surface, Text, TextInput } from "react-native-paper";
import StationResult from "./StationResult";

type Props = {
  label: string;
  onStationData?: (id: string) => void;
};

export default function StationSearchButton({ label, onStationData }: Props) {
  const [visible, setVisible] = useState(false);

  const exit = () => {
    getDepartures();
    setVisible(false);
  };

  return (
    <>
      <Modal animationType="slide" visible={visible} transparent={true}>
        <Surface elevation={1} style={styles.surface}>
          <View style={styles.header}>
            <IconButton icon="close" size={24} onPress={exit} />
            <Text variant="titleLarge">{label}</Text>
          </View>
          <TextInput label="Search for stations..." autoFocus />
          <List.Section>
            <List.Subheader>Saved places</List.Subheader>
            <StationResult name="Hannover Hbf" />
            <List.Subheader>Search results</List.Subheader>
            <StationResult name="Hannover Hbf" />
          </List.Section>
        </Surface>
      </Modal>
      <TextInput label={label} onFocus={() => setVisible(true)}></TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  surface: {
    height: "100%",
    padding: 32,
    gap: 16,
  },
});
