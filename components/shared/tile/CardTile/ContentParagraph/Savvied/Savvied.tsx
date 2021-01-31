import Axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import { CardContext } from "context/CardContext";

const ComponentContainer = styled.div`

`;

const SavviedButton = styled.button`

`;

type TComponent = {
  data: number;
}

const Savvied = ({ data }: TComponent) => {
  const { setIsUpdated } = useContext(CardContext);

  const handleClick = () => {
    setIsUpdated(true);
  };

  return (
    <ComponentContainer>
      <button onClick={handleClick}>asdada</button>
      {data}
    </ComponentContainer>
  );
};

export default Savvied;