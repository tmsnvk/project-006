import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TStyled = {
  icon: any;
  disabled?: boolean;
}
const StyledIcon = styled(FontAwesomeIcon)<TStyled>`
  display: inline-block;
  color: ${({ disabled }) => !disabled ? ({ theme }) => theme.color.grayDark : ({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0 0.5rem 0 0.5rem;
`;

export default StyledIcon;