import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { CardContext } from "context/CardContext";
import { NextDefaultChoice, NextRandomChoice } from "components/page/category";
import { LayoutContainer } from "components/shared/containers";
import { CardTile } from "components/page/category";
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

    const response: TResponse = await db.collection("categorydata").findOne({ "categoryName": query.name.toLowerCase() });
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

type TCardData = {
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

const Name = ({ cardData }: TCardData) => {
  const { setGetCardData, setSavvied, isUpdated, setIsUpdated, isRandom } = useContext(CardContext);
  const [category, setCategory] = useState<string>("");

  //loading cardData
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
  }, [setCategory]);

  // updating savvied-counter
  useEffect(() => {
    if (!isUpdated) return;

    const updateSavviedCounter = async (): Promise<void> => {
      try {
        const { data } = await axios.post("/api/savvied", { data: { id: cardData.cardId, category: cardData.cardCategory }}, { headers: { "Content-Type": "application/json" }});
        setSavvied(data.savvied);
        setIsUpdated(false);
      } catch (error) {
        return console.log(`===> The error is - ${error} <===`);
      }
    };

    updateSavviedCounter();
  }, [isUpdated]);

  return (
    <>
      <Head>
        <title>SavvyJar - Category: {cardData.cardCategory}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <CardTile />
        {!isRandom ? <NextDefaultChoice category={category} /> : <NextRandomChoice />}
      </LayoutContainer>
    </>
  );
};

export default Name;