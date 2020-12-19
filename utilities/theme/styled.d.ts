import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      yellowDark: string;
      yellowLight: string;
      grayDark: string;
      grayLight: string;
      blueDark: string;
      redDark: string;
    },
    fontFamily: {
      primary: string;
      secondary: string;
    },
    fontSize: {
      default: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    },
    mediaQuery: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    }
  }
}