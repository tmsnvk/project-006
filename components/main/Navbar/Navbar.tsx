import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

const SectionContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
	width: 100%;
  margin: 0 auto;
  padding: 2rem 0 0 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    justify-content: flex-end;
    width: 80%;
  }
`;

const Navbar = () => {
  return (
    <SectionContainer>
      <NavLink linkTo={"/"} render={"Home"} />
      <NavLink linkTo={"/top"} render={"Top5 \u2764"} />
    </SectionContainer>
  );
};

export default Navbar;