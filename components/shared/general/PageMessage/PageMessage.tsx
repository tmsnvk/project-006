import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const ContentParagraph = styled.p`
  padding: 1rem 0 1rem 0;
`;

type TComponent = {
  text: {
    id: number;
    content: string;
  }[]
}

const PageMessage = ({ text }: TComponent) => {
  const renderData = text.map(({ content, id }) => {
    return (
      <ContentParagraph key={id}>
        {content}
      </ContentParagraph>
    );
  });

  return (
    <ComponentContainer>
      {renderData}
    </ComponentContainer>
  );
};

export default PageMessage;