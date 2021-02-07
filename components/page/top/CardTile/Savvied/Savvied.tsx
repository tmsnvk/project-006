import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0 0 0;
`;

const SavviedCounter = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.yellowDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  letter-spacing: 0.2rem;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.blueDark};
  border-radius: 0.75rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

type TComponent = {
  render: number;
}

const Savvied = ({ render }: TComponent) => {
  return (
    <ComponentContainer>
      <SavviedCounter>
        &#x2764; {render}
      </SavviedCounter>
    </ComponentContainer>
  );
};

export default Savvied;