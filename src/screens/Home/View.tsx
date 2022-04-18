import React from "react";
import LottieView from "lottie-react-native";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";

import { HomeViewProps } from "~/screens/Home/Model";
import { Box, Button, Text } from "~/components";

const View: React.FC<HomeViewProps> = ({ navigateToWeather }) => {
  const { width, height } = useDimensions();

  const HEIGHT_LOTTIE = height * 0.5;

  return (
    <Box flex={1} pt={"m"}>
      <Box width={width} height={HEIGHT_LOTTIE}>
        <LottieView source={require("../../assets/lottie/stormshowersday.json")} />
      </Box>

      <Box px={"l"} maxWidth={HEIGHT_LOTTIE}>
        <Text variant={"title1"} textAlign={"center"} mb={"l"}>
          Discover the Weather in Your City
        </Text>

        <Text variant={"body"} textAlign={"center"} mb={"xl"}>
          Get to know your weather maps and radar precipitation forecast
        </Text>

        <Button borderRadius={"l"} onPress={navigateToWeather}>
          <Text variant={"button"}>Get Started</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default View;
