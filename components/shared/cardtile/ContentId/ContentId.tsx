import React from "react";
import styled from "styled-components";
import { TComponent } from "./ContentId.type";

const ComponentContainer = styled.h2`
  font-size: 1rem;
`;

const ContentId = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      CardID: {render}
    </ComponentContainer>
  );
};

export default ContentId;