import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SectionContainer = styled.nav`
	width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 2rem 0;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    width: 80%;
    padding: 2rem 5rem 2rem 5rem;
  }
`;

const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const PageLinkContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 2rem 0 0 0;
`;

const PageLink = styled.a`
  padding: 1rem 3rem 1rem 3rem;
  margin: 5rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimaryDark};
  font-weight: 600;
  letter-spacing: 0.1rem;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadowLight};
  border-radius: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadowDark};
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