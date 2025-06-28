import JourneySearch from "@/components/organisms/JourneySearch";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "bahnbunny",
        }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <JourneySearch />
      </View>
    </>
  );
}
