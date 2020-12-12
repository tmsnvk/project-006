import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  padding: 5rem 2.5rem 2rem 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 5rem 5rem 2rem 5rem;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  content: string;
}

const Content = ({ content }: TComponent) => {
  return (
    <ComponentContainer>
      {content}
    </ComponentContainer>
  );
};

export default Content;