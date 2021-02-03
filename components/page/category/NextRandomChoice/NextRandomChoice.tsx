import React, { useContext } from "react";
import { CardContext } from "context/CardContext";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/links";
import siteData from "utilities/data/siteData/siteData.json";

const NextRandomChoice = () => {
  const { randomCategory } = useContext(CardContext);

  return (
    <ButtonsContainer>
      <LinkTile url={"/"} render={siteData.random.choice.category} padding={"2rem 2rem 2rem 2rem"} />
      <LinkTile url={`/category/${randomCategory}`} render={siteData.random.choice.random} padding={"2rem 2rem 2rem 2rem"} />
    </ButtonsContainer>
  );
};

export default NextRandomChoice;