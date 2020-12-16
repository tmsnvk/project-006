import React from "react";
import styled from "styled-components";

const SectionContainer = styled.footer`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
`;

const Footer = () => {
  return (
    <SectionContainer>
      tamas novak with &#x2764;, 2020
    </SectionContainer>
  );
};

export default Footer;