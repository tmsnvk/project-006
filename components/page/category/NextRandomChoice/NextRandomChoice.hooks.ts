import { useContext, useEffect, useState } from "react";
import { CardContext } from "context/CardContext";
import getRandomNumber from "utilities/helpers/getRandomNumber";
import { trackClick } from "utilities/helpers/analytics";
import siteData from "utilities/data/siteData/siteData.json";
import { TFilter } from "./NextRandomChoice.type";

export const useNextRandomChoice = () => {
  const { randomCategory, setRandomCategory } = useContext(CardContext);

  const [changeRandomCategory, setChangeRandomCategory] = useState<boolean>(false);

  useEffect(() => {
    const randomNumber = getRandomNumber(0, siteData.home.categories.length);
    siteData.home.categories.filter(({ category }: TFilter, index) => index === randomNumber ? (setRandomCategory(category), setChangeRandomCategory(false)) : null);
  }, [changeRandomCategory]);

  const handleClick = () => {
    setChangeRandomCategory(true);
    trackClick(`random - ${randomCategory}`);
  };

  return { handleClick, randomCategory };
}