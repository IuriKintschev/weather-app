import React from "react";

import { HomeViewProps } from "~/screens/Home/Model";
import { Box, Button, Text } from "~/components";

const View: React.FC<HomeViewProps> = ({ navigateToWeather }) => (
  <Box flex={1} alignItems={"center"} justifyContent={"center"}>
    <Text variant={"title1"}>Home Page</Text>

    <Button variant={"elevation"} onPress={navigateToWeather}>
      <Text variant={"button"}>Ready</Text>
    </Button>
  </Box>
);

export default View;
