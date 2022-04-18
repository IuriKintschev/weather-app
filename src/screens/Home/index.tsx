import React from "react";
// eslint-disable-next-line react-native/split-platform-components
import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";

import View from "./View";

import { Stack } from "~/utils/navigation";
import { AppRouteProps } from "~/routes/App.routes";

const Home: React.FC<Stack<AppRouteProps, "Home">> = ({ navigation }) => {
  const { navigate } = navigation;

  React.useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: "O app precisa de sua localização",
          message: "Este aplicativo precisa acessar sua localização",
        });
      } catch (err) {
        console.error(err);
      }
    };

    if (Platform.OS === "android") {
      requestLocationPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, []);

  function navigateToWeather() {
    navigate("Weather");
  }

  return <View {...{ navigateToWeather }} />;
};

export default Home;
