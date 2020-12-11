import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 0 0.5rem 0 0.5rem;
`;

export default StyledIcon;