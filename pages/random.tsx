import React from "react";
import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import { connectToDatabase } from "utilities/mongodb/mongodb";
import styled from "styled-components";
import { NextChoice, RandomCard } from "components/page/random";

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

type TData = {
  category: string;
  content: {
    id: number;
    content: string;
  }[];
}

export const getServerSideProps = async () => {
  try {
    const { db } = await connectToDatabase();

    const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    const categoryList = ["health", "social", "workplace"];

    const response: TData = await db.collection("data").findOne({ "category": categoryList[getRandomNumber(0, categoryList.length)] });

    return {
      props: {
        data: {
          category: response.category,
          content: response.content[getRandomNumber(0, response.content.length)]
        }
      }
    };
  } catch (error) {
    console.log(error);
  }
};

const Random = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>LPT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <RandomCard data={data} />
        <NextChoice />
      </LayoutContainer>
    </>
  );
};

export default Random;