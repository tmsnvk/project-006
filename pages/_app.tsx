import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { CardContextProvider } from "context/CardContext";
import { Footer, Navbar } from "components/main";
import GlobalStyle from "utilities/theme/GlobalStyle";
import theme from "utilities/theme/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDoubleUp, faAtom, faBuilding, faCodeBranch, faDesktop, faExternalLinkAlt, faHeartbeat, faHouseUser, faPaperPlane, faPaw, faPeopleArrows, faPlaneDeparture, faRandom, faTable, faUsers, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDoubleUp, faAtom, faBuilding, faCodeBranch, faDesktop, faExternalLinkAlt, faHeartbeat, faHouseUser, faPaperPlane, faPaw, faPeopleArrows, faPlaneDeparture, faRandom, faTable, faUsers, faUserGraduate);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <CardContextProvider>
        <Component {...pageProps} />
      </CardContextProvider>
      <Footer />
    </ThemeProvider>
  );
};

export default App;