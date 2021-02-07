import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    padding: 5rem 5rem 5rem 5rem;
  }
`;

export default ContentContainer;