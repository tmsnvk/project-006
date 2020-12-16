import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledIcon } from "components/shared/utilities";

type TStyled = {
  padding?: string;
}

const LinkTag = styled.a<TStyled>`
  background-color: ${({ theme }) => theme.color.yellowDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 700;
  letter-spacing: 0.2rem;
  padding: ${({ padding }) => padding === "small" ? "1.5rem 1.5rem 1.5rem 1.5rem" : "2rem 2rem 2rem 2rem"};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.blueDark};
  border-radius: 0.75rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueDark};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.grayDark};
    transform: scale(1.05);
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  data: string;
  icon?: string[];
  padding?: string;
  url: string;
}

const LinkTile = ({ data, icon, padding, url }: TComponent) => {
  return (
    <Link href={url} passHref>
      <LinkTag padding={padding}>
        {icon ? <StyledIcon icon={icon}></StyledIcon> : null}
        {data}
      </LinkTag>
    </Link>
  );
};

export default LinkTile;