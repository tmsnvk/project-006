import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.yellowLight};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.color.grayDark};
    font-size: 62.5%;
    line-height: 1.5;
    position: relative;
    min-height: 100vh;
    padding: 0 0 10rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;