import React from "react";
import LottieView from "lottie-react-native";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";
import normalize from "react-native-normalize";

import { WeatherViewProps } from "~/screens/Weather/Model";
import { Box, Text } from "~/components";

const View: React.FC<WeatherViewProps> = () => {
  const { width, height } = useDimensions();

  const HEIGHT_LOTTIE = height * 0.3;
  const WIDTH_LOTTIE = width * 0.7;

  return (
    <Box flex={1} pt={"xl"} px={"l"}>
      <Text variant={"title1"} mb={"l"} pt={"xl"}>
        Today's Report
      </Text>

      <Box
        width={WIDTH_LOTTIE}
        height={HEIGHT_LOTTIE}
        alignItems={"center"}
        alignSelf={"center"}
        justifyContent={"center"}
      >
        <LottieView source={require("../../assets/lottie/stormshowersday.json")} />
      </Box>

      <Box flex={1} alignItems={"center"}>
        <Text variant={"title2"} mb={"l"}>
          Its Cloudy
        </Text>

        <Box flexDirection={"row"}>
          <Text variant={"title1"} fontSize={normalize(60)}>
            {Math.floor(Math.random() * 100)}
          </Text>
          <Box height={20} width={20} borderRadius={"xl"} backgroundColor={"blue"} />
        </Box>
      </Box>
    </Box>
  );
};

export default View;
