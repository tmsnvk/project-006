import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-transform: uppercase;
  padding: 0 0 0.5rem 0;
`;

type TComponent = {
  render: string;
}

const CategoryName = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      Category: {render}
    </ComponentContainer>
  );
};

export default CategoryName;