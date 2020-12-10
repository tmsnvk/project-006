import React from "react";
import { connectToDatabase } from "../utilities/mongodb/mongodb";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  
  const hellotext = await db
  .collection("data")
  .findOne()

  return {
    props: {
      data: JSON.parse(JSON.stringify(hellotext)),
    },
  };
}

type TComponent = {
  data: {
    hello: string;
  }
}

const Card = ({ data }: TComponent) => {

  return (
    <div>
      aaa {data.hello}
    </div>
  );
};

export default Card;