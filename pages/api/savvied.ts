import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "utilities/mongodb/utilities/mongodb";

type TResponse = {
  savvied: number;
}

type TRequestBody = {
  id: string;
  category: string;
}

type TGetCard = {
  cardId: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  savvied: number;
}[]

type TFilter = {
  cardId: string;
}

const updateCounter = async (request: NextApiRequest, response: NextApiResponse<TResponse>): Promise<void> => {
  try {
    const { db } = await connectToDatabase();
    const { category, id }: TRequestBody = request.body.data;

    const updateCard = await db.collection("categorydata").findOneAndUpdate({ "categoryName": category, "categoryContent.cardId": id }, ({ "$inc": { "categoryContent.$.savvied": +1 }}));
    const getCard: TGetCard = updateCard.value.categoryContent.filter(({ cardId }: TFilter) => cardId === id);

    return response.json({ savvied: getCard[0].savvied + 1 });
  } catch (error) {
    return console.log(`===> The error is - ${error} <===`);
  }
};

export default updateCounter;