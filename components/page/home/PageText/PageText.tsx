import React from "react";
import { PageTextContainer } from "components/shared/containers";
import { PageMessage, PageTitle } from "components/shared/text";
import siteData from "utilities/data/siteData/siteData.json";

const PageText = () => {
  return (
    <PageTextContainer>
      <PageTitle text={siteData.home.pagetext.title} />
      <PageMessage text={siteData.home.pagetext.paragraphs} />
    </PageTextContainer>
  );
};

export default PageText;