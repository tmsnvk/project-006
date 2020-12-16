import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h1`
  margin: 2.5rem 0 2.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  text-align: center;
`;

type TComponent = {
  text: string;
}

const PageTitle = ({ text }: TComponent) => {
  return (
    <ComponentContainer>
      {text}
    </ComponentContainer>
  );
};

export default PageTitle;