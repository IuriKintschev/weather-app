import React from "react";

import View from "./View";

import { Stack } from "~/utils/navigation";
import { AppRouteProps } from "~/routes/App.routes";

const Home: React.FC<Stack<AppRouteProps, "Home">> = ({ navigation }) => {
  const { navigate } = navigation;

  function navigateToWeather() {
    navigate("Weather");
  }

  return <View {...{ navigateToWeather }} />;
};

export default Home;
