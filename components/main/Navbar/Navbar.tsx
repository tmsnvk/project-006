import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SectionContainer = styled.nav`
	width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 0 0;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    padding: 2rem 5rem 0 5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    width: 80%;
  }
`;

const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 2.5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    margin: 0 0 0 0;
  }
`;

const PageLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 2.5rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    margin: 0 0 0 0;
  }
`;

const PageLink = styled.a`
  width: 12rem;
  padding: 1rem 0 1rem 0;
  margin: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.yellowDark};
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: center;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.blueDark};
  border-radius: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueDark};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.grayDark};
  }
`;

const Navbar = () => {
  return (
    <SectionContainer>
      <LogoContainer>
        LOGO PLACEHOLDER
      </LogoContainer>
      <PageLinkContainer>
        <Link href="/"><PageLink>Home</PageLink></Link>
        <Link href="/top"><PageLink>Top5 &#x2764;</PageLink></Link>
      </PageLinkContainer>
    </SectionContainer>
  );
};

export default Navbar;