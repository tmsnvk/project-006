import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledIcon } from "components/shared/utilities";
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
  margin: 5rem auto 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 40%;
  }
`;

const LinkContainer = styled.div`
  margin: 2.5rem 1rem 2.5rem 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryLinkTag = styled.a`
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimaryDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: 0.2rem;
  font-weight: 700;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadowLight};
  border-radius: 0.75rem;
  transform: scale(1.05);

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.primaryDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TData = {
  id: number;
  name: string;
  icon: string[];
}[]

const CategoryBox = () => {
  const [randomList, setRandomList] = useState<TData | []>([]);

  useEffect(() => {
    setRandomList(siteData.home.categories.names.sort(() => Math.random() - 0.5));
  }, []);

  const renderData: TData = randomList.map(({ id, name, icon }) => {
    return (
      <LinkContainer key={id}>
        <Link href={`/category/${name}`} passHref>
          <CategoryLinkTag>
            <StyledIcon icon={icon}></StyledIcon> 
            {name}
          </CategoryLinkTag>
        </Link>
      </LinkContainer>
    );
  });

  return (
    <ComponentContainer>
      {renderData}
    </ComponentContainer>
  );
};

export default CategoryBox;