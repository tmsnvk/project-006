import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.default};
`;

type TComponent = {
  render: string;
}

const ContentId = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      CardID: {render}
    </ComponentContainer>
  );
};

export default ContentId;