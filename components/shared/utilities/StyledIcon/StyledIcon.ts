import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TStyled = {
  icon: any;
}
const StyledIcon = styled(FontAwesomeIcon)<TStyled>`
  display: inline-block;
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0 0.5rem 0 0.5rem;
`;

export default StyledIcon;