import React, { useContext } from "react";
import styled from "styled-components";
import { CardContext } from "context/CardContext";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0 0 0;
`;

const CategoryName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-transform: uppercase;
  padding: 0 0 0.5rem 0;
`;

const ContentId = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.default};
`;

const CategoryHeader = () => {
  const { getCardData } = useContext(CardContext);

  return (
    <ComponentContainer>
      <CategoryName>
        Category: {getCardData.cardCategory}
      </CategoryName>
      <ContentId>
        CardID: {getCardData.cardId}
      </ContentId>
    </ComponentContainer>
  );
};

export default CategoryHeader;