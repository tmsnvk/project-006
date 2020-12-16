import styled from "styled-components";

const ButtonsContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 5rem auto 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.large}) {
    flex-direction: row;
  }
`;

export default ButtonsContainer;