import { TimetableEntry } from "@/lib/types/TimetableEntry";
import { View } from "react-native";
import { Divider, List, Text, useTheme } from "react-native-paper";
import PlannedActual from "../atoms/PlannedActual";

type Props = {
  entry: TimetableEntry;
};

export default function TimetableEntry({ entry }: Props) {
  const theme = useTheme();

  return (
    <>
      <List.Item
        title={() => (
          <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            <PlannedActual entry={entry.departure || entry.arrival} />
            <View>
              <Text variant="titleLarge">{entry.line.name}</Text>
              <Text variant="titleMedium">to Hannover Hbf</Text>
            </View>
          </View>
        )}
        right={() => (
          <View>
            <Text>Platform 2</Text>
          </View>
        )}
      />
      <Divider />
    </>
  );
}
