import styled from "styled-components";

const Submit = styled.input`
  align-self: center;
  width: 20rem;
  height: 5rem;
  margin: 5rem 0 0 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.grayDark};
  font-weight: 600;
  letter-spacing: 0.2rem;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.yellowDark};
  box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.blueDark};
  border-radius: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueDark};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.blueDark};
    box-shadow: 0px 2px 5px 0px ${({ theme }) => theme.color.grayDark};
  }
`;

export default Submit;