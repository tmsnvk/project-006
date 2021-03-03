import React from "react";
import styled from "styled-components";
import { CardText, CategoryHeader, CategoryName, ContentContainer, ContentId } from "components/shared/cardtile";
import Savvied from "./Savvied";
import { TComponent } from "./CardTile.type";

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
  background-color: ${({ theme }) => theme.color.backgroundDark};
  box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.secondary};
  border-radius: 0.5rem;
`;

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