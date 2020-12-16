import React from "react";
import styled from "styled-components";
import { LinkTile } from "components/shared/tile";
import siteData from "utilities/data/siteData/siteData.json";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 2.5rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 50%;
  }
`;

const LinkContainer = styled.div`
  margin: 2.5rem 1rem 2.5rem 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

type TComponent = {
  icon: string[];
  id: number;
  name: string;
}

const CategoryLabels = () => {
  const renderData = siteData.home.categories.names.map(({ icon, id, name }: TComponent) => {
    return (
      <LinkContainer key={id}>
        <LinkTile data={name} icon={icon} padding={"small"} url={`/category/${name}`} />
      </LinkContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderData}
    </ComponentContainer>
  );
};

export default CategoryLabels;