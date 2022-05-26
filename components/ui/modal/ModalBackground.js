import React from "react";
import styled from "@emotion/styled";
import {device} from "../../../styles/devices";

const ModalBackground = ({hideModal}) => {
  return <ModalBackgroundWrapper onClick={hideModal} />;
};

const ModalBackgroundWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  @media screen and ${device.tablet} {
    display: none;
  }
`;

export default ModalBackground;
