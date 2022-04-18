import { createTheme } from "@shopify/restyle";
import normalize from "react-native-normalize";

import "~/utils/extensions";

export const palette = {
  black: "#0B0B0B",
  white: "#FFFFFF",

  blue: "#0C0D34",

  primaryColor: "#4187cc",
  error: "#F75175",
  success: "#10C86E",

  light: "#F5F5F5",
  lightWeight: "#F8F8F8",
  dark: "#171626",
  darkWeight: "#0F0D1C",
};

const theme = createTheme({
  colors: {
    ...palette,

    titleWeight: palette.blue,
    textDefault: palette.blue.hexOpacity(0.6),
    buttonDefaultBackground: palette.blue.hexOpacity(0.05),

    mainBackground: palette.light,
    mainForeground: palette.white,
  },
  spacing: {
    s: normalize(8),
    m: normalize(16),
    l: normalize(24),
    xl: normalize(40),
  },
  borderRadii: {
    s: normalize(4),
    m: normalize(8),
    l: normalize(10),
    xl: normalize(25),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title1: {
      fontSize: normalize(24),
      // fontFamily: "OpenSans-Bold",
      color: "titleWeight",
    },
    title2: {
      fontSize: normalize(20),
      lineHeight: normalize(30),
      // fontFamily: "OpenSans-Bold",
      color: "titleWeight",
    },
    title3: {
      fontSize: normalize(18),
      lineHeight: normalize(30),
      // fontFamily: "OpenSans-Bold",
      color: "titleWeight",
    },
    title4: {
      fontSize: normalize(16),
      lineHeight: normalize(30),
      // fontFamily: "OpenSans-Bold",
      color: "titleWeight",
    },
    title5: {
      fontSize: normalize(14),
      lineHeight: normalize(30),
      // fontFamily: "OpenSans-Bold",
      color: "titleWeight",
    },
    body: {
      fontSize: normalize(14),
      // fontFamily: "OpenSans-Regular",
      color: "textDefault",
    },
    button: {
      fontSize: normalize(18),
      // fontFamily: "OpenSans-Bold",
      color: "lightWeight",
    },
  },
  buttonVariants: {
    defaults: {
      height: normalize(50),
      flexDirection: "row",
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "primaryColor",
    },
    elevation: {
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,

    titleWeight: palette.light,
    textDefault: palette.light.hexOpacity(0.6),
    buttonDefaultBackground: palette.light.hexOpacity(0.05),

    mainBackground: palette.black,
    mainForeground: palette.darkWeight,
  },
};

export default theme;
