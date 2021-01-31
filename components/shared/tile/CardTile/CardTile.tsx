import React from "react";
import { CardTileContainer } from "components/shared/containers";
import CategoryHeader from "./CategoryHeader";
import ContentParagraph from "./ContentParagraph";

const CardTile = () => {
  return (
    <CardTileContainer>
      <CategoryHeader />
      <ContentParagraph />
    </CardTileContainer>
  );
};

export default CardTile;