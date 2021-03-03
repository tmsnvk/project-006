import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { ContainerStyleTemplate } from "components/shared/containers";
import { useNavLinkTracking } from "./NavLink.hooks";
import { TComponent } from "./NavLink.type";

const PageLink = styled.a`
  ${ContainerStyleTemplate}

  width: 12rem;
  margin: 0 1rem 0 1rem;
  padding: 1rem 0 1rem 0;
  background-color: ${({ theme }) => theme.color.backgroundDark};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.1rem;
`;

const NavLink = ({ linkTo, render }: TComponent) => {
  const { handleClick } = useNavLinkTracking();

  return (
    <Link href={linkTo}>
      <PageLink onClick={handleClick}>{render}</PageLink>
    </Link>
  );
};

export default NavLink;