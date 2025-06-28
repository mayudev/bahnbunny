import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Tabs, TabScreen, TabsProvider } from "react-native-paper-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Timetable() {
  return (
    <SafeAreaProvider>
      <TextInput label="Station" />
      <TabsProvider defaultIndex={0}>
        <Tabs>
          <TabScreen label="Departures" icon="debug-step-out">
            <ScrollView></ScrollView>
          </TabScreen>
          <TabScreen label="Arrivals" icon="debug-step-into">
            <View style={{ backgroundColor: "black", flex: 1 }} />
          </TabScreen>
        </Tabs>
      </TabsProvider>
    </SafeAreaProvider>
  );
}
