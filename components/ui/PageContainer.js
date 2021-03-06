import React from "react";
import Header from "../Header";
import Head from "next/head";
import styled from "@emotion/styled";

const PageContainer = ({children}) => {
  return (
    <>
      <Head>
        <title>JASON AMEY - DevJobs Web App</title>
      </Head>
      <Header />
      <PageContainerWrapper>{children}</PageContainerWrapper>
    </>
  );
};

const PageContainerWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-secondary);
  padding-bottom: 70px;
  position: relative;
`;
export default PageContainer;
