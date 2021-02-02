import React from "react";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/tile";
import siteData from "utilities/data/siteData/siteData.json";

type TCategory = {
  category: string;
}

const NextChoice = ({ category }: TCategory) => {
  return (
    <ButtonsContainer>
      <LinkTile data={siteData.category.choice.anotherCategory} url={"/"} />
      <LinkTile data={siteData.category.choice.sameCategory} url={`/category/${category}`} />
    </ButtonsContainer>
  );
};

export default NextChoice;