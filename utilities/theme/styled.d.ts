import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primaryDark: string
      secondary: string
      backgroundDark: string
      backgroundLight: string
    },
    fontFamily: {
      primary: string
      secondary: string
    },
    mediaQuery: {
      xSmall: string
      small: string
      medium: string
      large: string
      xLarge: string
    }
  }
}