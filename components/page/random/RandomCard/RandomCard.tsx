import React from "react";
import styled from "styled-components";
import Category from "./Category";
import Content from "./Content";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 90%;
  margin: 5rem auto 0;
  background-color: ${({ theme }) => theme.color.backgroundPrimaryDark};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadowLight};
  border-radius: 0.75rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 40%;
  }
`;

type TComponent = {
  data: {
    category: string;
    content: {
      id: number;
      content: string;
    };
  };
}

const RandomCard = ({ data }: TComponent) => {
  return (
    <ComponentContainer>
      <Category category={data.category} id={data.content.id} />
      <Content content={data.content.content} />
    </ComponentContainer>
  );
};

export default RandomCard;