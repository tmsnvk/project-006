import { useContext, useEffect } from "react";
import { CardContext } from "context/CardContext";
import getRandomNumber from "utilities/helpers/getRandomNumber";
import siteData from "utilities/data/siteData/siteData.json";
import { trackClick } from "utilities/helpers/analytics";
import { TFilter } from "./RandomLabel.type";

export const useRandomLabel = () => {
  const { randomCategory, setRandomCategory, setIsRandom } = useContext(CardContext);

  useEffect(() => {
    const randomNumber = getRandomNumber(0, siteData.home.categories.length);
    siteData.home.categories.filter(({ category }: TFilter, index) => index === randomNumber ? setRandomCategory(category) : null);
  }, []);
  
  const handleClick = () => {
    setIsRandom(true);
    trackClick("random label");
  };

  return { handleClick, randomCategory };
};