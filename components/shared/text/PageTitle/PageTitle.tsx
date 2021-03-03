import React from "react";
import styled from "styled-components";
import { TComponent } from "./PageTitle.type";

const ComponentContainer = styled.h1`
  margin: 2.5rem 0 2.5rem 0;
  font-size: 2.6rem;
  text-align: center;
`;

const PageTitle = ({ text }: TComponent) => {
  return (
    <ComponentContainer>
      {text}
    </ComponentContainer>
  );
};

export default PageTitle;