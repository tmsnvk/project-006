import { connectToDatabase } from "utilities/mongodb/mongodb";

type TData = {
  category: string;
  content: {
    id: number;
    content: string;
  }[];
}

const getRandomTip = async (request: any, response: any): Promise<void> => {
  try {
    const { db } = await connectToDatabase();

    const data: TData = await db.collection("data").findOne();

    const categoryLength = data.content.length;
    const getRandomNumber = (min = 0, max = categoryLength) => Math.floor(Math.random() * (max - min) + min);

    const category = data.category;
    const content = data.content[getRandomNumber()];

    response.json({ category, content });
  } catch (error: any) {
    console.log(error);
  }
};

export default getRandomTip;