import React from "react";
import styled from "styled-components";
import { TComponent } from "./CategoryName.type";

const ComponentContainer = styled.h1`
  padding: 0 0 0.5rem 0;
  font-size: 2rem;
  text-transform: uppercase;
`;

const CategoryName = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      Category: {render}
    </ComponentContainer>
  );
};

export default CategoryName;