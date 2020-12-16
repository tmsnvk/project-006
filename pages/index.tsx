import React from "react";
import Head from "next/head";
import { LayoutContainer } from "components/shared/containers";
import { CategoryLabels, PageText, RandomLabel } from "components/page/home";
import { connectToDatabase } from "utilities/mongodb/mongodb";

export const getServerSideProps = async () => {
  const { client } = await connectToDatabase();
  const isConnected = await client.isConnected();

  return {
    props: { isConnected }
  };
};

type TComponent = {
  isConnected: boolean;
}

const Index = ({ isConnected }: TComponent) => {
  return (
    <>
      <Head>
        <title>SavvyJar - Home</title>
        <link rel="icon" href="/favicon.ico" />
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