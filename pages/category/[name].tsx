import React, { useContext, useEffect, useState } from "react";
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
        cardData: {
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
  cardData: {
    cardCategory: string;
    cardId: string;
    cardContent: {
      paragraphOne: string;
      paragraphTwo: string;
      paragraphThree: string;
      savvied: number;
    };
  };
}

const Name = ({ cardData }: TData) => {
  const { setGetCardData, setSavvied, isUpdated, setIsUpdated } = useContext(CardContext);
  const [category, setCategory] = useState<string>("");

  // loading cardData
  useEffect(() => {
    const getUpdate = (): void => {
      setGetCardData({
        cardCategory: cardData.cardCategory,
        cardId: cardData.cardId,
        cardContent: {
          paragraphOne: cardData.cardContent.paragraphOne,
          paragraphTwo: cardData.cardContent.paragraphTwo,
          paragraphThree: cardData.cardContent.paragraphThree
        }
      });
      setSavvied(cardData.cardContent.savvied)
    }

    getUpdate();
  }, [cardData]);

  // choosing category
  useEffect(() => {
    const getCategory = (): void => setCategory(window.location.href.substring(window.location.href.lastIndexOf("/") + 1));

    getCategory();
    return () => setCategory("");
  }, [setCategory]);

  // updating savvied-counter
  useEffect(() => {
    if (!isUpdated) return;

    const updateSavvied = async (): Promise<void> => {
      try {
        const { data } = await axios.post("/api/savvied", { data: { id: cardData.cardId, category: cardData.cardCategory }});
        setSavvied(data.savvied);
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
        <title>SavvyJar - Category: {cardData.cardCategory}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <CardTile />
        <NextChoice category={category} />
      </LayoutContainer>
    </>
  );
};

export default Name;