import React from "react";
import LottieView from "lottie-react-native";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";
import normalize from "react-native-normalize";

import { WeatherViewProps } from "~/screens/Weather/Model";
import { Box, Text } from "~/components";
import { getLottieByWaetherApi } from "~/utils/functions";

const View: React.FC<WeatherViewProps> = ({ weatherData }) => {
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
        <LottieView source={getLottieByWaetherApi(weatherData.weather[0]!.main)} autoPlay loop />
      </Box>

      <Box flex={1} alignItems={"center"}>
        <Text variant={"title2"} mb={"l"}>
          Its Cloudy
        </Text>

        <Box flexDirection={"row"}>
          <Text variant={"title1"} fontSize={normalize(60)}>
            {weatherData.main.temp}
          </Text>
          <Box height={20} width={20} borderRadius={"xl"} backgroundColor={"blue"} />
        </Box>

        <Box flexDirection={"row"} alignSelf={"stretch"} mt={"l"} justifyContent={"space-around"}>
          <Text variant={"title2"}>Max: {weatherData.main.temp}°</Text>

          <Text variant={"title2"}>Min: {weatherData.main.temp}°</Text>
        </Box>

        <Text variant={"title2"} mt={"m"}>
          {weatherData.name}
        </Text>
      </Box>
    </Box>
  );
};

export default View;
