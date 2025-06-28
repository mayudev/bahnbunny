import CustomAppBar from "@/components/organisms/CustomAppBar";
import { Cabin_400Regular, useFonts } from "@expo-google-fonts/cabin";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import {
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  useFonts({ Cabin_400Regular });

  const paper = {
    ...(colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light }),
    fonts: configureFonts({
      config: {
        fontFamily: "Cabin_400Regular",
      },
    }),
  };

  return (
    <PaperProvider theme={paper}>
      <Stack
        screenOptions={{
          header: (props) => <CustomAppBar {...props} />,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
