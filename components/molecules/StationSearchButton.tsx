import { api } from "@/lib/api/api";
import { Station } from "@/lib/types/Station";
import { useRef, useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import { IconButton, List, Surface, Text, TextInput } from "react-native-paper";
import StationResult from "./StationResult";

type Props = {
  label: string;
  displayValue?: string;
  onStationData?: (station: Station) => void;
};

export default function StationSearchButton({
  label,
  displayValue,
  onStationData,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState<Station[]>([]);
  const timeout = useRef(0);

  const exit = () => {
    setVisible(false);
  };

  const updateValue = (text: string) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(async () => {
      const stations = await api.getStations(text);
      setResults(stations);
    }, 500);
  };

  const selected = (station: Station) => {
    onStationData?.(station);
    exit();
  };

  return (
    <>
      <Modal animationType="slide" visible={visible} transparent={true}>
        <Surface elevation={1} style={styles.surface}>
          <View style={styles.header}>
            <IconButton icon="close" size={24} onPress={exit} />
            <Text variant="titleLarge">{label}</Text>
          </View>
          <TextInput
            onChangeText={updateValue}
            label="Search for stations..."
            autoFocus
          />
          <ScrollView>
            <List.Section>
              <List.Subheader>Saved places</List.Subheader>
              {/* <StationResult name="Hannover Hbf" /> */}
              <List.Subheader>Search results</List.Subheader>
              {results.map((result) => (
                <StationResult
                  onPress={() => selected(result)}
                  key={result.id}
                  name={result.name}
                />
              ))}
            </List.Section>
          </ScrollView>
        </Surface>
      </Modal>
      <TextInput
        label={label}
        value={displayValue}
        onFocus={(e) => {
          e.target.blur();
          setVisible(true);
        }}
      ></TextInput>
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
