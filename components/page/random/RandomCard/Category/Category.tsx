import React from "react";
import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0 0 0;
`;

const CategoryName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-transform: uppercase;
`;

const ContentId = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.default};
`;

type TComponent = {
  category: string;
  id: string;
}

const Category = ({ category, id }: TComponent) => {
  return (
    <ComponentContainer>
      <CategoryName>
        Category: {category}
      </CategoryName>
      <ContentId>
        Card ID: {id}
      </ContentId>
    </ComponentContainer>
  );
};

export default Category;