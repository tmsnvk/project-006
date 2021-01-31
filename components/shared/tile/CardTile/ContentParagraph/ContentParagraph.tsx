import React, { useContext } from "react";
import styled from "styled-components";
import { CardContext } from "context/CardContext";
import CardText from "./CardText";
import Savvied from "./Savvied";

const ComponentContainer = styled.div`
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 5rem 5rem 5rem 5rem;
  }
`;

const ContentParagraph = () => {
  const { cardData } = useContext(CardContext);

  return (
    <ComponentContainer>
      <CardText data={cardData.cardContent.paragraphOne} />
      <CardText data={cardData.cardContent.paragraphTwo} />
      <CardText data={cardData.cardContent.paragraphThree} />
      <Savvied data={cardData.savvied} />
    </ComponentContainer>
  );
};

export default ContentParagraph;