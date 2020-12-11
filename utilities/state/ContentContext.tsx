import React, { createContext, ReactNode, useState } from "react";

type TProvider = {
  children: ReactNode;
}

type TContent = {
  dataFetch: {
    category: string;
    id: number;
    content: string;
  }
  setDataFetch: (value: { category: string, id: number, content: string }) => void;
}

export const ContentContext = createContext({} as TContent);

export const ContentContextProvider = ({ children }: TProvider) => {
  const [dataFetch, setDataFetch] = useState({ category: "", id: 0, content: "" });

  return (
    <ContentContext.Provider value={{ dataFetch, setDataFetch }}>
      {children}
    </ContentContext.Provider>
  );
};