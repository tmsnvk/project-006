import React from "react";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/links";
import siteData from "utilities/data/siteData/siteData.json";
import { useNextRandomChoice } from "./NextRandomChoice.hooks";

const NextRandomChoice = () => {
  const { handleClick, randomCategory } = useNextRandomChoice();

  return (
    <ButtonsContainer>
      <LinkTile url={"/"} render={siteData.random.choice.category} />
      <LinkTile url={`/category/${randomCategory}`} handleClick={handleClick} render={siteData.random.choice.random} />
    </ButtonsContainer>
  );
};

export default NextRandomChoice;