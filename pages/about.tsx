import React from "react";
import Head from "next/head";
import { LayoutContainer } from "components/shared/containers";
import { ContactForm, PageText } from "components/page/about";
import dbConnect from "../utilities/mongodb/utilities/mongoose";

export const getServerSideProps = async () => {
  await dbConnect();

  return {
    props: {}
  };
};

const About = () => {
  return (
    <>
      <Head>
        <title>SavvyJar - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutContainer>
        <PageText />
        <ContactForm />
      </LayoutContainer>
    </>
  );
};

export default About;