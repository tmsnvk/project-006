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
  data: string;
}

const CardText = ({ data }: TComponent) => {
  return (
    <ComponentContainer>
      {data}
    </ComponentContainer>
  );
};

export default CardText;