import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    yellowDark: "#ffd479",
    yellowLight: "#fee09f",
    grayDark: "#2d2d2d",
    grayLight: "#ffd479",
    blueDark: "#6ab0f3",
    redDark: "#d90e00"
  },
  fontFamily: {
    primary: `"Roboto Mono", sans-serif`,
    secondary: `"Roboto Condensed", sans-serif`
  },
  fontSize: {
    default: "1rem",
    small: "1.4rem",
    medium: "1.6rem",
    large: "2rem",
    xLarge: "2.6rem",
    xxLarge: "3rem"
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

// Background	Darkest	#2d2d2d
// Comment	Medium	#777c85
// Foreground	Light	#b3b9c5
// Function	Lightest	#ffffff
// Variable	Red	#f2777a
// Number	Orange	#fca369
// Attribute	Yellow	#ffd479
// Keyword	Light Yellow	#ffeea6
// String	Green	##92d192
// Class/Tag	Blue	#6AB0F3
// Constant/Pseudo	Aqua	#76d4d6
// Support	Purple	#e1a6f2
// Operator	Beige	#ac8d58