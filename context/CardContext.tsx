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
  isRandom: boolean;
  setIsRandom: (value: boolean) => void;
  randomCategory: string;
  setRandomCategory: (value: string) => void;
}

type TProvider = {
  children: ReactNode;
}

export const CardContext = createContext({} as TCardContext);

export const CardContextProvider = ({ children }: TProvider) => {
  const [getCardData, setGetCardData] = useState({ cardCategory: "", cardId: "", cardContent: { paragraphOne: "", paragraphTwo: "", paragraphThree: "" }});
  const [savvied, setSavvied] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [randomCategory, setRandomCategory] = useState("");

  return (
    <CardContext.Provider value={{ getCardData, setGetCardData, savvied, setSavvied, isUpdated, setIsUpdated, isRandom, setIsRandom, randomCategory, setRandomCategory }}>
      {children}
    </CardContext.Provider>
  );
};