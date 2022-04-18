import React from "react";

import { WeatherViewProps } from "~/screens/Weather/Model";
import { Box, Text } from "~/components";

const View: React.FC<WeatherViewProps> = () => (
  <Box flex={1} alignItems={"center"} justifyContent={"center"}>
    <Text variant={"title1"}>Weather Page</Text>
  </Box>
);

export default View;
