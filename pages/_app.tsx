import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "utilities/theme/GlobalStyle";
import theme from "utilities/theme/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCodeBranch, faExternalLinkAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faCodeBranch, faExternalLinkAlt, faLinkedin, faPaperPlane);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;