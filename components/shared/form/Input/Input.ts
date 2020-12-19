import styled from "styled-components";

const Input = styled.input`
  align-self: center;
  width: 25rem;
  height: 6.5rem;
  padding: 0 0.5rem 0 2rem;
  margin: 2.5rem 0 0 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.yellowDark};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.blueDark};
  border-radius: 0.75rem;
  cursor: text;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueDark};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.grayDark};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.grayDark};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.blueDark};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.grayDark};
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 35rem;
  }
`;

export default Input;