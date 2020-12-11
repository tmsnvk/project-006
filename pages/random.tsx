import React, { useContext } from "react";
import Head from "next/head";
import Router from "next/router";
import { ContentContext } from "utilities/state/ContentContext";
import styled from "styled-components";

const LayoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 1em;
  row-gap: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Container = styled.div`
  margin: 20rem auto 0;
  font-size: 2rem;
`;

const Random = () => {
  const { dataFetch } = useContext(ContentContext);

  return (
    <>
      <Head>
        <title>LPT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <Container>
          {dataFetch.category}
        </Container>
        <Container>
          {dataFetch.id}
          {dataFetch.content}
        </Container>
        {dataFetch.category === "" ? <div>Request another tip</div> : null}
      </LayoutContainer>
    </>
  );
};

export default Random;