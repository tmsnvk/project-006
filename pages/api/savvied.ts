import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "utilities/mongodb/utilities/mongodb";

type TRequestBody = {
  id: string;
  category: string;
}

type TResponse = {
  savvied: number;
}

type TFindCategory = {
  _id: number;
  categoryId: string;
  categoryName: string;
  categoryContent: {
    cardId: string;
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
    savvied: number;
  }[]
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
    const { id, category }: TRequestBody = request.body.data;
    const { db } = await connectToDatabase();

    await db.collection("categorydata").findOneAndUpdate({ "categoryName": category, "categoryContent.cardId": id }, ({ "$inc": { "categoryContent.$.savvied": +1 }}));

    const findCategory: TFindCategory = await db.collection("categorydata").findOne({ "categoryName": category });
    console.log(findCategory);
    const getCard: TGetCard = findCategory.categoryContent.filter(({ cardId }: TFilter) => cardId === id);
    return response.json({ savvied: getCard[0].savvied });
  } catch (error) {
    console.log(error);
  }
};

export default updateCounter;