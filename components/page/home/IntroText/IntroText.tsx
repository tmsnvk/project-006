import React from "react";
import styled from "styled-components";
import siteData from "utilities/data/siteData.json";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 5rem auto 0;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`;

const Message = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const ContentParagraph = styled.p`

`;

const IntroText = () => {
  const renderData = siteData.home.introtext.paragraphs.map(({ content, id }) => {
    return (
      <ContentParagraph key={id}>
        {content}
      </ContentParagraph>
    );
  });

  return (
    <ComponentContainer>
      <Title>
        {siteData.home.introtext.title}
      </Title>
      <Message>
        {renderData}
      </Message>
    </ComponentContainer>
  );
};

export default IntroText;