import React from "react";
import styled from "styled-components";
import { LinkTile } from "components/shared/tile";
import siteData from "utilities/data/siteData/siteData.json";

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
  return (
    <ComponentContainer>
      <LinkTile data={siteData.home.randomButton.title} padding={"big"} url={"/random"} />
    </ComponentContainer>
  );
};

export default RandomLabel;