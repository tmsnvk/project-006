import React from "react";
import { PageTextContainer } from "components/shared/containers";
import { PageTitle } from "components/shared/text";
import siteData from "utilities/data/siteData/siteData.json";

const PageText = () => {
  return (
    <PageTextContainer>
      <PageTitle text={siteData.topSavvied.pagetext.title} />
    </PageTextContainer>
  );
};

export default PageText;