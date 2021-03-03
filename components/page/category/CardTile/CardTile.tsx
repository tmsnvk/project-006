import React, { useContext } from "react";
import styled from "styled-components";
import { CardContext } from "context/CardContext";
import { CardText, CategoryHeader, CategoryName, ContentContainer, ContentId } from "components/shared/cardtile";
import Savvied from "./Savvied";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 5rem auto 0;
  background-color: ${({ theme }) => theme.color.backgroundDark};
  box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.secondary};
  border-radius: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 50%;
  }
`;

const CardTile = () => {
  const { getCardData, savvied } = useContext(CardContext);

  return (
    <ComponentContainer>
      <CategoryHeader>
        <CategoryName render={getCardData.cardCategory} />
        <ContentId render={getCardData.cardId} />
      </CategoryHeader>
      <ContentContainer>
        <CardText render={getCardData.cardContent.paragraphOne} />
        <CardText render={getCardData.cardContent.paragraphTwo} />
        <CardText render={getCardData.cardContent.paragraphThree} />
        <Savvied render={savvied} />
      </ContentContainer>
    </ComponentContainer>
  );
};

export default CardTile;