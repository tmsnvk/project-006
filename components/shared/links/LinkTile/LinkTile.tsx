import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledIcon } from "components/shared/utilities";
import { TComponent, TStyledLinkTag } from "./LinkTile.type";

const LinkTag = styled.a<TStyledLinkTag>`
  background-color: ${({ theme }) => theme.color.backgroundDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-align: center;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.secondary};
  border-radius: 0.75rem;
  margin: 2rem 0 2rem 0;

  &:first-of-type {
    margin: 0 0 0 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.primaryDark};
    transform: scale(1.05);
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    margin: 0 2rem 0 2rem;

    &:first-of-type {
      margin: 0 2rem 0 2rem;
    }
  }
`;

const LinkTile = ({ url, handleClick, render, icon }: TComponent) => {
  return (
    <Link href={url} passHref>
      <LinkTag onClick={handleClick}>
        {icon ? <StyledIcon icon={icon} /> : null}
        {render}
      </LinkTag>
    </Link>
  );
};

export default LinkTile;