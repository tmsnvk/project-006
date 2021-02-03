import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CardContext } from "context/CardContext";
import { LinkTile } from "components/shared/links";
import getRandomNumber from "utilities/helpers/getRandomNumber";
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

type TFilter = {
  category: string;
}

const RandomLabel = () => {
  const { randomCategory, setRandomCategory, setIsRandom } = useContext(CardContext);

  useEffect(() => {
    const randomNumber = getRandomNumber(0, siteData.home.categories.length);
    siteData.home.categories.filter(({ category }: TFilter, index) => index === randomNumber ? setRandomCategory(category) : null);
  }, []);
  
  const handleClick = () => setIsRandom(true);

  return (
    <ComponentContainer>
      <LinkTile url={`/category/${randomCategory}`} handleClick={handleClick} render={siteData.home.randomTile.title} icon={siteData.home.randomTile.icon} padding={"2rem 2rem 2rem 2rem"} />
    </ComponentContainer>
  );
};

export default RandomLabel;