import React from "react";
import styled from "styled-components";
import { TComponent } from "./PageMessage.type";

const ContentParagraph = styled.p`
  padding: 1rem 0 1rem 0;
  font-size: 1.4rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    font-size: 1.6rem;
  }
`;

const PageMessage = ({ text }: TComponent) => {
  const renderData = text.map(({ content, id }) => {
    return (
      <ContentParagraph key={id}>
        {content}
      </ContentParagraph>
    );
  });

  return (
    <div>
      {renderData}
    </div>
  );
};

export default PageMessage;