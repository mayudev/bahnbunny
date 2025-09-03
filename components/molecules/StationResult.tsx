import { List } from "react-native-paper";

type Props = {
  name: string;
  type?: "station" | "place";
  onPress: () => void;
};

export default function StationResult({
  name,
  type = "station",
  onPress,
}: Props) {
  return (
    <List.Item
      onPress={onPress}
      left={(props) => (
        <List.Icon
          {...props}
          icon={type === "station" ? "bus-stop" : "map-marker"}
        />
      )}
      title={name}
    ></List.Item>
  );
}
