import React from "react";
import styled from "styled-components";
import CardText from "./CardText";

const ComponentContainer = styled.div`
  padding: 5rem 2.5rem 2rem 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 5rem 5rem 2rem 5rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  content: {
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
  };
}

const ContentParagraph = ({ content }: TComponent) => {
  return (
    <ComponentContainer>
      <CardText data={content.paragraphOne} />
      <CardText data={content.paragraphTwo} />
      <CardText data={content.paragraphThree} />
    </ComponentContainer>
  );
};

export default ContentParagraph;