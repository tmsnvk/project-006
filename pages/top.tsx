import React from "react";
import Head from "next/head";
import { LayoutContainer } from "components/shared/containers";
import { PageText, CardTile } from "components/page/top";
import { connectToDatabase } from "utilities/mongodb/utilities/mongodb";

export const getServerSideProps = async () => {
  try {
    const { db } = await connectToDatabase();

    const response = await db.collection("categorydata").aggregate([
      { $unwind: "$categoryContent" },
      { $sort: { "categoryContent.savvied": -1 }}
    ]).limit(5).toArray();

    return {
      props: {
        cardData: JSON.parse(JSON.stringify(response))
      }
    };
  } catch (error) {
    console.log(error);
  }
};

type TComponent = {
  cardData: {
    categoryContent: {
      cardId: string;
      paragraphOne: string;
      paragraphTwo: string;
      paragraphThree: string;
      savvied: number;
    },
    categoryId: string;
    categoryName: string;
    _id: string;
  }[]
}

const TopSavvied = ({ cardData }: TComponent) => {
  return (
    <>
      <Head>
        <title>SavvyJar - Top Savvies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <PageText />
        <CardTile cardData={cardData} />
      </LayoutContainer>
    </>
  );
};

export default TopSavvied;