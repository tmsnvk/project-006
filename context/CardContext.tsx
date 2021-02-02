import React, { createContext, ReactNode, useState } from "react";

type TCardData = {
  cardCategory: string;
  cardId: string;
  cardContent: {
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
  },
}

type TCardContext = {
  getCardData: TCardData;
  setGetCardData: (value: TCardData) => void;
  savvied: number;
  setSavvied: (value: number) => void;
  isUpdated: boolean;
  setIsUpdated: (value: boolean) => void;
}

type TProvider = {
  children: ReactNode;
}

export const CardContext = createContext({} as TCardContext);

export const CardContextProvider = ({ children }: TProvider) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [savvied, setSavvied] = useState(0);
  const [getCardData, setGetCardData] = useState({
    cardCategory: "",
    cardId: "",
    cardContent: {
      paragraphOne: "",
      paragraphTwo: "",
      paragraphThree: ""
    }
  });

  return (
    <CardContext.Provider value={{ getCardData, setGetCardData, savvied, setSavvied, isUpdated, setIsUpdated }}>
      {children}
    </CardContext.Provider>
  );
};