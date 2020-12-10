import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SectionContainer = styled.nav`
	width: 100%;
	position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primaryLight};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadow};
  padding: 2rem 0 2rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    padding: 2rem 5rem 2rem 5rem;
  }
`;

const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const PageLinkContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

const PageLink = styled.a`
  font-weight: 600;
  letter-spacing: 0.1rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 1rem 2rem 1rem 2rem;
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
        <Link href="/about"><PageLink>About</PageLink></Link>
      </PageLinkContainer>
    </SectionContainer>
  );
};

export default Navbar;