import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { connectToDatabase } from "../utilities/mongodb/mongodb";

const Container = styled.div`
  color: red;
  font-size: 5rem;
`;

export async function getServerSideProps(context: any) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}

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
      <Container>
        aaa - {`${isConnected}`}
      </Container>
    </>
  );
};

export default Index;