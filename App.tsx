import React from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import Bootstrap from "~/Bootstrap";
import theme, { darkTheme } from "~/styles/theme";

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Bootstrap />
    </ThemeProvider>
  );
};

export default App;
