import React from "react";
import Head from "next/head";
import { NextChoice } from "components/page/random";
import { LayoutContainer } from "components/shared/containers";
import { CardTile } from "components/shared/tile";
import { connectToDatabase } from "utilities/mongodb/utilities/mongodb";
import getRandomNumber from "utilities/helpers/getRandomNumber";

type TResponse = {
  categoryName: string;
  categoryContent: {
    cardId: string;
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
  }[];
}

export const getServerSideProps = async () => {
  try {
    const { db } = await connectToDatabase();

    const categoryList = ["health", "social"];

    const response: TResponse = await db.collection("data").findOne({ "categoryName": categoryList[getRandomNumber(0, categoryList.length)] });
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

const Random = ({ data }: TData) => {
  return (
    <>
      <Head>
        <title>SavvyJar - Category: {data.cardCategory}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <CardTile data={data} />
        <NextChoice />
      </LayoutContainer>
    </>
  );
};

export default Random;