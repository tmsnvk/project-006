import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    primaryDark: "#2d2d2d", // dark gray
    secondary: "#6ab0f3", // light blue
    backgroundDark: "#ffd479", // dark yellow
    backgroundLight: "#fee09f", // light yellow
  },
  fontFamily: {
    primary: `"Roboto Mono", sans-serif`,
    secondary: `"Roboto Condensed", sans-serif`
  },
  mediaQuery: {
    xSmall: "320px",
    small: "480px",
    medium: "768px",
    large: "992px",
    xLarge: "1200px"
  }
};

export default theme;