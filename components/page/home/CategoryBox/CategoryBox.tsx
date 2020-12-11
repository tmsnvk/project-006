import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledIcon } from "components/shared/utilities";
import siteData from "utilities/data/siteData.json";

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
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.backgroundPrimaryDark};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadow};
  padding: 1rem 1rem 1rem 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 60%;
    padding: 2rem 2rem 2rem 2rem;
  }
`;

const CategoryLinkTag = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 0.2rem;
  font-weight: 700;
  margin: 0 1rem 0 1rem;
  padding: 1rem 1rem 1rem 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const CategoryBox = () => {
  const renderData = siteData.home.categories.names.map(({ id, name, icon }) => {
    return (
      <Link key={id} href={`/card/${name}`} passHref>
        <CategoryLinkTag>
          <StyledIcon icon={icon}></StyledIcon> 
          {name}
        </CategoryLinkTag>
      </Link>
    );
  });

  return (
    <ComponentContainer>
      {renderData}
    </ComponentContainer>
  );
};

export default CategoryBox;