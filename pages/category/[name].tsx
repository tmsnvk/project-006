import React, { useContext, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { CardContext } from "context/CardContext";
import { NextChoice } from "components/page/category";
import { LayoutContainer } from "components/shared/containers";
import { CardTile } from "components/shared/tile";
import { connectToDatabase } from "utilities/mongodb/utilities/mongodb";
import getRandomNumber from "utilities/helpers/getRandomNumber";

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
    savvied: number;
  }[];
}

export const getServerSideProps = async ({ query }: TContext) => {
  try {
    const { db } = await connectToDatabase();

    const response: TResponse = await db.collection("categorydata").findOne({ "categoryName": query.name });
    const responseContent = response.categoryContent[getRandomNumber(0, response.categoryContent.length)];

    return {
      props: {
        data: {
          cardCategory: response.categoryName,
          cardId: responseContent.cardId,
          cardContent: {
            paragraphOne: responseContent.paragraphOne,
            paragraphTwo: responseContent.paragraphTwo,
            paragraphThree: responseContent.paragraphThree,
            savvied: responseContent.savvied
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
      savvied: number;
    };
  };
  isUpdate: boolean;
}

const Name = ({ data }: TData) => {
  const { cardData, setCardData, isUpdated, setIsUpdated } = useContext(CardContext);

  useEffect(() => {
    const getUpdate = () => {
      setCardData({
        cardCategory: data.cardCategory,
        cardId: data.cardId,
        cardContent: {
          paragraphOne: data.cardContent.paragraphOne,
          paragraphTwo: data.cardContent.paragraphTwo,
          paragraphThree: data.cardContent.paragraphThree
        },
        savvied: data.cardContent.savvied
      });
    }

    getUpdate();
  }, []);

  useEffect(() => {
    if (!isUpdated) return;

    const updateSavvied = async (): Promise<void> => {
      try {
        const response = await axios.post("/api/savvied", { data: data.cardId });
        setIsUpdated(false);
      } catch (error) {
        console.log(error);
      }
    };

    updateSavvied();
  }, [isUpdated]);

  return (
    <>
      <Head>
        <title>SavvyJar - Category: {data.cardCategory}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <CardTile />
        <NextChoice />
      </LayoutContainer>
    </>
  );
};

export default Name;