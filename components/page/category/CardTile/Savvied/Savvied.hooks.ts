import { useContext, useEffect, useState } from "react";
import { CardContext } from "context/CardContext";
import { trackClick } from "utilities/helpers/analytics";

export const useButtonDisabled = () => {
  const { getCardData, setIsUpdated } = useContext(CardContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    setIsButtonDisabled(false);
  }, [getCardData]);

  const handleCounter = (): void => {
    setIsUpdated(true);
    setIsButtonDisabled(true);
    trackClick("savvy");
  };

  return { handleCounter, isButtonDisabled };
};