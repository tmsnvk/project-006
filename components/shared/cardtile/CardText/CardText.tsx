import React from "react";
import styled from "styled-components";
import { TComponent } from "./CardText.type";

const ComponentContainer = styled.p`
  padding: 1rem 0 1rem 0;
  font-size: 1.4rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: 1.6rem;
  }
`;

const CardText = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default CardText;