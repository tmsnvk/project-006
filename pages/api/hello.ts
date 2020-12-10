import { connectToDatabase } from "../../utilities/mongodb/mongodb";

export default async (require: any, response: any) => {
  const { db } = await connectToDatabase();
  
  const hello = await db
  .collection("data")
  .findOne()

  response.json({response: hello});
};