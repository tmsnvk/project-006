import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TStyled = {
  disabled?: boolean;
}

const ComponentContainer = styled(FontAwesomeIcon)<TStyled>`
  display: inline-block;
  color: ${({ disabled }) => !disabled ? ({ theme }) => theme.color.grayDark : ({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0 0.5rem 0 0.5rem;
`;

type TComponent = {
  icon: any;
  disabled?: boolean;
}

const StyledIcon = ({ icon, disabled }: TComponent) => {
  return (
    <ComponentContainer icon={icon} disabled={disabled}></ComponentContainer>
  );
};

export default StyledIcon;