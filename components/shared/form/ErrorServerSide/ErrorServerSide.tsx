import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.p`
  align-self: center;
  width: fit-content;
  color: ${({ theme }) => theme.color.redDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 600;
  padding: 2rem 0 0 0;
  text-align: center;

  &:after {
    content: " ";
    display: block;
    padding: 0.5rem 0 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.redDark};
    width: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  errorMessage: string;
}

const ErrorServerSide = ({ errorMessage }: TComponent) => {
  return (
    <ComponentContainer>
      {errorMessage}
    </ComponentContainer>
  );
};

export default ErrorServerSide;