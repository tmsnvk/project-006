import React from "react";
import { PageTextContainer } from "components/shared/containers";
import { PageMessage, PageTitle } from "components/shared/general";
import siteData from "utilities/data/siteData/siteData.json";

const PageText = () => {
  return (
    <PageTextContainer>
      <PageTitle text={siteData.about.pagetext.title} />
      <PageMessage text={siteData.about.pagetext.paragraphs} />
    </PageTextContainer>
  );
};

export default PageText;