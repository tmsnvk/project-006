import React from "react";
import styled from "styled-components";
import { LinkTile } from "components/shared/links";
import siteData from "utilities/data/siteData/siteData.json";
import { useRandomLabel } from "./RandomLabel.hooks";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 5rem auto 5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const RandomLabel = () => {
  const { handleClick, randomCategory } = useRandomLabel();

  return (
    <ComponentContainer>
      <LinkTile url={`/category/${randomCategory}`} handleClick={handleClick} render={siteData.home.randomTile.title} icon={siteData.home.randomTile.icon} />
    </ComponentContainer>
  );
};

export default RandomLabel;