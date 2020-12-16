import React, { useEffect, useState } from "react";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/tile";
import siteData from "utilities/data/siteData/siteData.json";

const NextChoice = () => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCategory = () => setCategory(window.location.href.substring(window.location.href.lastIndexOf("/") + 1));

    getCategory();
    return () => setCategory("");
  }, [setCategory]);

  return (
    <ButtonsContainer>
      <LinkTile data={siteData.category.choice.anotherCategory} url={"/"} />
      <LinkTile data={siteData.category.choice.sameCategory} url={`/category/${category}`} />
    </ButtonsContainer>
  );
};

export default NextChoice;