import React from "react";
import { CardTileContainer } from "components/shared/containers";
import CategoryHeader from "./CategoryHeader";
import ContentParagraph from "./ContentParagraph";

type TComponent = {
  data: {
    cardCategory: string;
    cardId: string;
    cardContent: {
      paragraphOne: string;
      paragraphTwo: string;
      paragraphThree: string;
    };
  };
}

const CardTile = ({ data }: TComponent) => {
  return (
    <CardTileContainer>
      <CategoryHeader category={data.cardCategory} id={data.cardId} />
      <ContentParagraph content={data.cardContent} />
    </CardTileContainer>
  );
};

export default CardTile;