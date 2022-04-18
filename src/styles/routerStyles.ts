import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useTheme } from "@shopify/restyle";

import { Theme } from "~/styles/theme";

export function basicConfig() {
  const theme = useTheme<Theme>();

  const headerConfig: NativeStackNavigationOptions = {
    contentStyle: {
      backgroundColor: theme.colors.mainBackground,
    },
  };

  return headerConfig;
}

export function noBar() {
  const headerConfig: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return headerConfig;
}
