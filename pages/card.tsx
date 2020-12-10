import React from "react";
import { connectToDatabase } from "utilities/mongodb/mongodb";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/iconList/iconList";

export const getServerSideProps = async () => {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("data")
    .findOne()

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

type TComponent = {
  data: {
    categories: {
      health: {
        id: number;
        content: string;
      }[];
      hobbies: {
        id: number;
        content: string;
      }[];
    }
  }
}

const Card = ({ data }: TComponent) => {

  return (
    <div>
      aaa {data.categories.health[0].content}
      <StyledIcon icon={iconList.linkedIn}></StyledIcon>
    </div>
  );
};

export default Card;