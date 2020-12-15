import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { NextChoice } from "components/page/category";
import { CardTile } from "components/shared/tile";
import { connectToDatabase } from "utilities/mongodb/mongodb";
import getRandomNumber from "utilities/helpers/getRandomNumber";

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

type TContext = {
  query: {
    name: string;
  };
}

type TResponse = {
  categoryName: string;
  categoryContent: {
    cardId: string;
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
  }[];
}

export const getServerSideProps = async ({ query }: TContext) => {
  try {
    const { db } = await connectToDatabase();

    const response: TResponse = await db.collection("data").findOne({ "categoryName": query.name });
    const responseContent = response.categoryContent[getRandomNumber(0, response.categoryContent.length)];

    return {
      props: {
        data: {
          cardCategory: response.categoryName,
          cardId: responseContent.cardId,
          cardContent: {
            paragraphOne: responseContent.paragraphOne,
            paragraphTwo: responseContent.paragraphTwo,
            paragraphThree: responseContent.paragraphThree
          } 
        }
      }
    };
  } catch (error) {
    console.log(error);
  }
};

type TData = {
  data: {
    cardCategory: string;
    cardId: string;
    cardContent: {
      paragraphOne: string;
      paragraphTwo: string;
      paragraphThree: string;
    };
  };
}

const Name = ({ data }: TData) => {
  return (
    <>
      <Head>
        <title>SavvyJar - {data.cardCategory} Category</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <CardTile data={data} />
        <NextChoice />
      </LayoutContainer>
    </>
  );
};

export default Name;