import React from "react";
import styled from "styled-components";

const CounterSpan = styled.span`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
  margin: 1rem 0 0 0;
`;

type TComponent = {
  characterCounter: number;
  characterLength: string;
}

const CharacterCounter = ({ characterCounter, characterLength }: TComponent) => {
  return (
    <CounterSpan>
      {characterCounter} / {characterLength}
    </CounterSpan>
  );
};

export default CharacterCounter;