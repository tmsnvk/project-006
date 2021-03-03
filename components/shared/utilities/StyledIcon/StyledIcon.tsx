import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TComponent, TStyled } from "./StyledIcon.type";

const ComponentContainer = styled(FontAwesomeIcon)<TStyled>`
  display: inline-block;
  color: ${({ disabled }) => !disabled ? ({ theme }) => theme.color.primaryDark : ({ theme }) => theme.color.secondary};
  font-size: 2rem;
  margin: 0 1rem 0 0.5rem;
`;

const StyledIcon = ({ icon, disabled }: TComponent) => {
  return (
    <ComponentContainer icon={icon} disabled={disabled}></ComponentContainer>
  );
};

export default StyledIcon;