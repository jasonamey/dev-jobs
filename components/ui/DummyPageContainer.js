import React from "react";
import styled from "@emotion/styled";

const DummyPageContainer = ({children}) => {
  return <DummyPageContainerWrapper>{children}</DummyPageContainerWrapper>;
};

const DummyPageContainerWrapper = styled.main`
  height: 100vh;
  widht: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
  @media screen and (min-width: 800px) {
    font-size: 100px;
  }
`;

export default DummyPageContainer;
