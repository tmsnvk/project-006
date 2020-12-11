import React, { useContext } from "react";
import Link from "next/link";
import axios from "axios";
import styled from "styled-components";
import { ContentContext } from "utilities/state/ContentContext";
import siteData from "utilities/data/siteData.json";

const ComponentContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 10rem auto 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimaryDark};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.shadow};

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }
`;

const RandomLinkTag = styled.a`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 600;
  letter-spacing: 0.1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

type TData = {
  category: string;
  content: {
    id: number;
    content: string;
  }
}

const RandomTip = () => {
  const { dataFetch, setDataFetch } = useContext(ContentContext);

  const getRandomTip = async () => {
    try {
      const { data } = await axios.get<TData>("/api/random", { headers: { "Content-Type": "application/json" }});
      setDataFetch({ category: data.category, id: data.content.id, content: data.content.content });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ComponentContainer>
      <Link href={"/random"} passHref>
        <RandomLinkTag onClick={getRandomTip}>
          {siteData.home.random.title}
        </RandomLinkTag>
      </Link>
    </ComponentContainer>
  );
};

export default RandomTip; 