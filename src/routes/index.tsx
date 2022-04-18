import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "~/routes/App.routes";

const Router: React.FC = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);

export default Router;
