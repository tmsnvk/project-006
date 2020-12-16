import React from "react";
import Head from "next/head";
import { LayoutContainer } from "components/shared/containers";
import { PageText } from "components/page/about";

const About = () => {
  return (
    <>
      <Head>
        <title>SavvyJar - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <PageText />
      </LayoutContainer>
    </>
  );
};

export default About;