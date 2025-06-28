import { List } from "react-native-paper";

type Props = {
  name: string;
  type?: "station" | "place";
};

export default function StationResult({ name, type = "station" }: Props) {
  return (
    <List.Item
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
