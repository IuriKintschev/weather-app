import React from "react";

import View from "./View";

import { Stack } from "~/utils/navigation";
import { AppRouteProps } from "~/routes/App.routes";

const Weather: React.FC<Stack<AppRouteProps, "Weather">> = () => <View />;

export default Weather;
