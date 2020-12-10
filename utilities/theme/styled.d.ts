import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      backgroundPrimaryDark: string,
      backgroundPrimaryLight: string,
      primaryDark: string,
      primaryLight: string,
      secondary: string,
      shadow: string
    },
    fontFamily: {
      main: string
    },
    fontSize: {
      default: string,
      small: string,
      medium: string,
      large: string,
      xLarge: string,
      xxLarge: string
    },
    mediaQuery: {
      xSmall: string,
      small: string,
      medium: string,
      large: string,
      xLarge: string
    }
  }
}