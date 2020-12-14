import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  padding: 5rem 2.5rem 2rem 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 5rem 5rem 2rem 5rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const CardText = styled.p`

`;

type TComponent = {
  content: {
    cardId: string;
    paragraphOne: string;
    paragraphTwo: string;
    paragraphThree: string;
  };
}

const Content = ({ content }: TComponent) => {
  return (
    <ComponentContainer>
      <CardText>
        {content.paragraphOne}
      </CardText>
      <CardText>
        {content.paragraphTwo}
      </CardText>
      <CardText>
        {content.paragraphThree}
      </CardText>
    </ComponentContainer>
  );
};

export default Content;