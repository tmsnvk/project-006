import React from "react";
import styled from "styled-components";

const SectionContainer = styled.footer`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
  padding: 0 0 1rem 0;
`;

const FixFooterPosition = styled.div`
  flex-grow: 1;
`;

const Footer = () => {
  return (
    <>
      <FixFooterPosition></FixFooterPosition>
      <SectionContainer>
        tamas novak with &#x2764;, 2020
      </SectionContainer>
    </>
  );
};

export default Footer;