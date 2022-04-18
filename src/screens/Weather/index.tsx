import React from "react";
import Geolocation from "@react-native-community/geolocation";
import { ActivityIndicator } from "react-native";
import { useTheme } from "@shopify/restyle";

import ENV from "../../../enviroments";

import View from "./View";

import { Stack } from "~/utils/navigation";
import { AppRouteProps } from "~/routes/App.routes";
import api from "~/utils/api";
import { WeatherData } from "~/utils/requestTypes";
import { Box } from "~/components";
import { Theme } from "~/styles/theme";

const Weather: React.FC<Stack<AppRouteProps, "Weather">> = () => {
  const { colors } = useTheme<Theme>();

  const [weatherData, setWeatherData] = React.useState<WeatherData>();

  async function request(lat: number, long: number) {
    try {
      const { data } = await api.get<WeatherData>("/data/2.5/weather", {
        params: {
          lat,
          lon: long,
          lang: "pt_br",
          units: "metric",
          appid: ENV.APP_KEY,
        },
      });

      setWeatherData(data);
    } catch (e) {
      console.error(e);
    }
  }

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      async (loq) => {
        await request(loq.coords.latitude, loq.coords.longitude);
      },
      (error) => {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  }, []);

  if (!weatherData) {
    return (
      <Box flex={1} alignItems={"center"} justifyContent={"center"}>
        <ActivityIndicator size={"large"} color={colors.blue} />
      </Box>
    );
  }

  return <View {...{ weatherData }} />;
};

export default Weather;
