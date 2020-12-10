import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Navbar, Footer } from "components/main";
import { IntroText } from "components/page/home";
import { connectToDatabase } from "utilities/mongodb/mongodb";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 1em;
  row-gap: 1rem;
  font-size: 5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const getServerSideProps = async (context: any) => {
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  }
};

type TComponent = {
  isConnected: boolean;
}

const Index = ({ isConnected }: TComponent) => {
  return (
    <>
      <Head>
        <title>LPT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LayoutContainer>
        <IntroText />
      </LayoutContainer>
        aaa - {`${isConnected}`}
      <Footer />
    </>
  );
};

export default Index;