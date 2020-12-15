import styled from "styled-components";

const ButtonsContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    grid-column-end: 3;
    flex-direction: row;
    width: 80%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 40%;
  }
`;

export default ButtonsContainer;