import React from "react";
import styled from "styled-components";

const SectionContainer = styled.footer`
  width: 100%;
  text-align: center;
`;

const FixFooterPosition = styled.div`
  flex-grow: 1;
`;

const FooterText = styled.p`
  padding: 0 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: 600;
`;

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <FixFooterPosition></FixFooterPosition>
      <SectionContainer>
        <FooterText>
          tamas novak with &#x2764;, 2020 - {currentYear}
        </FooterText>
        <FooterText>
          built with: [nextjs, mongodb]
        </FooterText>
      </SectionContainer>
    </>
  );
};

export default Footer;