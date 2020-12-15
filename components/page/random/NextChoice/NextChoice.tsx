import React from "react";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/tile";
import siteData from "utilities/data/siteData/siteData.json";

const NextChoice = () => {
  return (
    <ButtonsContainer>
      <LinkTile data={siteData.random.choice.category} url={"/"} />
      <LinkTile data={siteData.random.choice.random} url={"/random"} />
    </ButtonsContainer>
  );
};

export default NextChoice;