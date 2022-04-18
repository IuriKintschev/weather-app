enum WeatherEnum {
  Thunderstorm = "Thunderstorm",
  Drizzle = "Drizzle",
  Rain = "Rain",
  Snow = "Snow",
  Atmosphere = "Atmosphere",
  Clear = "Clear",
  Clouds = "Clouds",
}

export type WeatherEnumType = keyof typeof WeatherEnum;

export const getLottieByWaetherApi = (main: WeatherEnumType) => {
  switch (main) {
    case WeatherEnum.Thunderstorm:
      return require("../assets/lottie/stormshowersday.json");
    case WeatherEnum.Drizzle:
      return require("../assets/lottie/partly-shower.json");
    case WeatherEnum.Rain:
      return require("../assets/lottie/partly-shower.json");
    case WeatherEnum.Snow:
      return require("../assets/lottie/snow.json");
    case WeatherEnum.Atmosphere:
      return require("../assets/lottie/partly-cloudy.json");
    case WeatherEnum.Clear:
      return require("../assets/lottie/sunny.json");
    case WeatherEnum.Clouds:
      return require("../assets/lottie/windy.json");
    default:
      return require("../assets/lottie/mist.json");
  }
};
