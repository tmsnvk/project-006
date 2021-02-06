import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "context/CardContext";
import { ButtonsContainer } from "components/shared/containers";
import { LinkTile } from "components/shared/links";
import getRandomNumber from "utilities/helpers/getRandomNumber";
import siteData from "utilities/data/siteData/siteData.json";

type TFilter = {
  category: string;
}

const NextRandomChoice = () => {
  const { randomCategory, setRandomCategory } = useContext(CardContext);

  const [changeRandomCategory, setChangeRandomCategory] = useState<boolean>(false);

  useEffect(() => {
    const randomNumber = getRandomNumber(0, siteData.home.categories.length);
    siteData.home.categories.filter(({ category }: TFilter, index) => index === randomNumber ? (setRandomCategory(category), setChangeRandomCategory(false)) : null);
  }, [changeRandomCategory]);

  const handleClick = () => setChangeRandomCategory(true);

  return (
    <ButtonsContainer>
      <LinkTile url={"/"} render={siteData.random.choice.category} padding={"2rem 2rem 2rem 2rem"} />
      <LinkTile url={`/category/${randomCategory}`} handleClick={handleClick} render={siteData.random.choice.random} padding={"2rem 2rem 2rem 2rem"} />
    </ButtonsContainer>
  );
};

export default NextRandomChoice;