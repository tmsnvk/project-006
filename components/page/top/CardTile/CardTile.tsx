import React from "react";
import styled from "styled-components";
import { CardText, CategoryHeader, CategoryName, ContentContainer, ContentId } from "components/shared/cardtile";
import Savvied from "./Savvied";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 90%;
  margin: 2.5rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 50%;
  }
`;

const CardContainer = styled.div`
  margin: 2.5rem auto 0;
  background-color: ${({ theme }) => theme.color.yellowDark};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.blueDark};
  border-radius: 0.75rem;
`;

type TComponent = {
  cardData: {
    categoryContent: {
      cardId: string;
      paragraphOne: string;
      paragraphTwo: string;
      paragraphThree: string;
      savvied: number;
    },
    categoryId: string;
    categoryName: string;
    _id: string;
  }[]
}

const CardTile = ({ cardData }: TComponent) => {
  const renderComponentData = cardData.map(({ categoryContent, categoryName }) => {
    return (
      <CardContainer key={categoryContent.cardId}>
        <CategoryHeader>
          <CategoryName render={categoryName} />
          <ContentId render={categoryContent.cardId} />
        </CategoryHeader>
        <ContentContainer>
          <CardText render={categoryContent.paragraphOne} />
          <CardText render={categoryContent.paragraphTwo} />
          <CardText render={categoryContent.paragraphThree} />
          <Savvied render={categoryContent.savvied} />
        </ContentContainer>
      </CardContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderComponentData}
    </ComponentContainer>
  );
};

export default CardTile;