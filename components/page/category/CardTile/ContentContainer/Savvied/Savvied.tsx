import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CardContext } from "context/CardContext";
import { StyledIcon } from "components/shared/utilities";
import iconList from "utilities/iconList/iconList";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem 0 0 0;
`;

const SavviedButton = styled.button`
  margin: 0 2rem 0 2rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.yellowDark};
  color: ${({ disabled }) => !disabled ? ({ theme }) => theme.color.grayDark : ({ theme }) => theme.color.blueDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  letter-spacing: 0.2rem;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.blueDark};
  border-radius: 0.75rem;

  &:hover {
    background-color: ${({ disabled }) => !disabled ? ({ theme }) => theme.color.blueDark : ({ theme }) => theme.color.yellowDark};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.grayDark};
    transform: ${({ disabled }) => !disabled ? "scale(1.05)" : null};
    cursor: ${({ disabled }) => !disabled ? "pointer" : "not-allowed"};;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
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

const Savvied = () => {
  const { getCardData, savvied, setIsUpdated } = useContext(CardContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    setIsButtonDisabled(false);
  }, [getCardData]);

  const handleCounter = (): void => {
    setIsUpdated(true);
    setIsButtonDisabled(true);
  };

  return (
    <ComponentContainer>
      <SavviedButton onClick={handleCounter} disabled={isButtonDisabled}>
        <StyledIcon icon={iconList.arrowUp} disabled={isButtonDisabled} />
        Savvy it
      </SavviedButton>
      <SavviedCounter>
        &#x2764; {savvied}
      </SavviedCounter>
    </ComponentContainer>
  );
};

export default Savvied;