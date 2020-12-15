import React from "react";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/tile";
import siteData from "utilities/data/siteData/siteData.json";

const NextChoice = () => {
  const name = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);

  return (
    <ButtonsContainer>
      <LinkTile data={siteData.category.choice.anotherCategory} url={"/"} />
      <LinkTile data={siteData.category.choice.sameCategory} url={`/category/${name}`} />
    </ButtonsContainer>
  );
};

export default NextChoice;