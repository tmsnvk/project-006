import React from "react";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/links";
import siteData from "utilities/data/siteData/siteData.json";

type TCategory = {
  category: string;
}

const NextDefaultChoice = ({ category }: TCategory) => {
  return (
    <ButtonsContainer>
      <LinkTile url={"/"} render={siteData.category.choice.anotherCategory} padding={"2rem 2rem 2rem 2rem"} />
      <LinkTile url={`/category/${category}`} render={siteData.category.choice.sameCategory} padding={"2rem 2rem 2rem 2rem"} />
    </ButtonsContainer>
  );
};

export default NextDefaultChoice;