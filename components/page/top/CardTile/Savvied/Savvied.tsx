import React from "react";
import styled from "styled-components";
import { TComponent} from "./Savvied.type";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0 0 0;
`;

const SavviedCounter = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.backgroundDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.secondary};
  border-radius: 0.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: 2rem;
  }
`;

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