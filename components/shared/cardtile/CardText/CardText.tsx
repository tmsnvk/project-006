import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 1rem 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  render: string;
}

const CardText = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      {render}
    </ComponentContainer>
  );
};

export default CardText;