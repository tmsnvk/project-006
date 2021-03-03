import { css } from "styled-components";

const ContainerStyleTemplate = css`
  box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.secondary};
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    box-shadow: 0 0.2rem 0.5rem 0 ${({ theme }) => theme.color.primaryDark};
  }
`;

export default ContainerStyleTemplate;