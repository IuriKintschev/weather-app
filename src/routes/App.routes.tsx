import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { basicConfig, noBar } from "~/styles/routerStyles";
import Home from "~/screens/Home";
import Weather from "~/screens/Weather";

export type AppRouteProps = {
  Home: undefined;
  Weather: undefined;
};

const AuthStack = createNativeStackNavigator<AppRouteProps>();

function AppRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="Home" screenOptions={basicConfig()}>
      {/* Pages without header */}
      <AuthStack.Group screenOptions={noBar()}>
        <AuthStack.Screen name="Home" component={Home} />

        <AuthStack.Screen name="Weather" component={Weather} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
}

export default AppRoutes;
