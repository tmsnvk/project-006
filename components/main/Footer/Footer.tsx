import React from "react";
import styled from "styled-components";

const SectionContainer = styled.footer`
  width: 100%;
  margin: 5rem 0 1rem 0;
  text-align: center;
`;
const FooterText = styled.p`
  padding: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <>
      <SectionContainer>
        <FooterText>
          tamas novak with {"\u2764"}, 2020 - 2021
        </FooterText>
        <FooterText>
          built with: [nextjs, mongodb]
        </FooterText>
      </SectionContainer>
    </>
  );
};

export default Footer;