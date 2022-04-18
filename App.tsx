import React from "react";
import { useColorScheme, LogBox } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import Bootstrap from "~/Bootstrap";
import theme, { darkTheme } from "~/styles/theme";

LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native."]);

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Bootstrap />
    </ThemeProvider>
  );
};

export default App;
