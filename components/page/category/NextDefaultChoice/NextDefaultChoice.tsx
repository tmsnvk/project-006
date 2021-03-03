import React from "react";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/links";
import siteData from "utilities/data/siteData/siteData.json";
import { TCategory } from "./NextDefaultChoice.type";
import { useNextDefaultChoice } from "./NextDefaultChoice.hooks";

const NextDefaultChoice = ({ category }: TCategory) => {
  const { handleClick } = useNextDefaultChoice(category);

  return (
    <ButtonsContainer>
      <LinkTile url={"/"} render={siteData.category.choice.anotherCategory} />
      <LinkTile url={`/category/${category}`} handleClick={handleClick} render={siteData.category.choice.sameCategory} />
    </ButtonsContainer>
  );
};

export default NextDefaultChoice;