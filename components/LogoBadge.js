import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import {device} from "../styles/devices";

const LogoBadge = ({logoBackground, company, logo}) => {
  return (
    <LogoBadgeWrapper backgroundColor={logoBackground}>
      <div className="image-container">
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          alt={`${company} logo`}
        />
      </div>
    </LogoBadgeWrapper>
  );
};

const LogoBadgeWrapper = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
  .image-container {
    background-color: ${(props) => props.backgroundColor};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 30px;
  }
`;

export default LogoBadge;
