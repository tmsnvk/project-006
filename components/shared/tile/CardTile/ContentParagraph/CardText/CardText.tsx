import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 1rem 0 1rem 0;
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