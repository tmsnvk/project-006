import React, { createContext, ReactNode, useState } from "react";

type TCardData = {
  cardCategory: string;
  cardId: string;
  cardContent: {
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
  },
  savvied: number;
}

type TCardContext = {
  cardData: TCardData;
  setCardData: (value: TCardData) => void;
  isUpdated: boolean;
  setIsUpdated: (value: boolean) => void;
}

type TProvider = {
  children: ReactNode;
}

export const CardContext = createContext({} as TCardContext);

export const CardContextProvider = ({ children }: TProvider) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [cardData, setCardData] = useState({
    cardCategory: "",
    cardId: "",
    cardContent: {
      paragraphOne: "",
      paragraphTwo: "",
      paragraphThree: ""
    },
    savvied: 0
  });

  return (
    <CardContext.Provider value={{ cardData, setCardData, isUpdated, setIsUpdated }}>
      {children}
    </CardContext.Provider>
  );
};