import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LinkTag = styled.a`
  padding: 2rem 2rem 2rem 2rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimaryDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: 700;
  letter-spacing: 0.2rem;
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadowLight};
  border-radius: 0.75rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadowDark};
    transform: scale(1.05);
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

type TComponent = {
  data: string;
  url: string;
}

const LinkTile = ({ data, url }: TComponent) => {
  return (
    <Link href={url} passHref>
      <LinkTag>
        {data}
      </LinkTag>
    </Link>
  );
};

export default LinkTile;