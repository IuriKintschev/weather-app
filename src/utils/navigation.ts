import type { ParamListBase, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface Stack<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> {
  navigation: NativeStackNavigationProp<ParamList, RouteName>;

  route: RouteProp<ParamList, RouteName>;
}
