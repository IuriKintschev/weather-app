import React from "react";
import Geolocation from "@react-native-community/geolocation";

import View from "./View";

import { Stack } from "~/utils/navigation";
import { AppRouteProps } from "~/routes/App.routes";

const Home: React.FC<Stack<AppRouteProps, "Home">> = ({ navigation }) => {
  const { navigate } = navigation;

  React.useEffect(() => {
    Geolocation.requestAuthorization();
  }, []);

  function navigateToWeather() {
    navigate("Weather");
  }

  return <View {...{ navigateToWeather }} />;
};

export default Home;
