import React from "react";
import Head from "next/head";
import { LayoutContainer } from "components/shared/containers";
import { CategoryLabels, PageText, RandomLabel } from "components/page/home";
import { usePageTracking } from "utilities/helpers/analytics";

const Index = () => {
  usePageTracking("home");

  return (
    <>
      <Head>
        <title>SavvyJar - Home</title>
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>
      <LayoutContainer>
        <PageText />
        <CategoryLabels />
        <RandomLabel />
      </LayoutContainer>
    </>
  );
};

export default Index;