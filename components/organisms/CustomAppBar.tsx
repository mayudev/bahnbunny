import { type BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import { type NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";

type Props = NativeStackHeaderProps | BottomTabHeaderProps;

export const hasBack = (
  x: Omit<Props, "route" | "options" | "navigation">
): x is NativeStackHeaderProps => Object.hasOwn(x, "back");

export default function CustomAppBar({
  route,
  options,
  navigation,
  ...props
}: Props) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header elevated>
      {hasBack(props) && props.back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
