import { useContext } from "react";
import { CardContext } from "context/CardContext";
import { trackClick } from "utilities/helpers/analytics";

export const useIsRandom = () => {
  const { setIsRandom } = useContext(CardContext);

  const handleClick = (category: string): void => {
    setIsRandom(false);
    trackClick(category);
  };

  return { handleClick };
};