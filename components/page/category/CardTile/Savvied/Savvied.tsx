import React from "react";
import styled from "styled-components";
import { StyledIcon } from "components/shared/utilities";
import { ContainerStyleTemplate } from "components/shared/containers";
import iconList from "utilities/iconList/iconList";
import { useButtonDisabled } from "./Savvied.hooks";
import { TComponent } from "./Savvied.type";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0 0 0;
`;

const SavviedButton = styled.button`
  ${ContainerStyleTemplate}

  margin: 0 2rem 0 2rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.backgroundDark};
  color: ${({ disabled }) => !disabled ? ({ theme }) => theme.color.primaryDark : ({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.2rem;

  &:hover {
    background-color: ${({ disabled }) => !disabled ? ({ theme }) => theme.color.secondary : ({ theme }) => theme.color.backgroundDark};
    transform: ${({ disabled }) => !disabled ? "scale(1.05)" : null};
    cursor: ${({ disabled }) => !disabled ? "pointer" : "not-allowed"};
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: 2rem;
  }
`;

const SavviedCounter = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.backgroundDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.secondary};
  border-radius: 0.75rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: 2rem;
  }
`;

const Savvied = ({ render }: TComponent) => {
  const { handleCounter, isButtonDisabled } = useButtonDisabled();

  return (
    <ComponentContainer>
      <SavviedButton onClick={handleCounter} disabled={isButtonDisabled}>
        <StyledIcon icon={iconList.arrowUp} disabled={isButtonDisabled} />
        Savvy it
      </SavviedButton>
      <SavviedCounter>
        {"\u2764"} {render}
      </SavviedCounter>
    </ComponentContainer>
  );
};

export default Savvied;