import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import LogoBadge from "./LogoBadge";
import {device} from "../styles/devices";
const JobHeading = ({logo, logoBackground, company, id}) => {
  return (
    <JobHeadingWrapper>
      <div className="phone-container">
        <LogoBadge
          logo={logo}
          logoBackground={logoBackground}
          company={company}
        />
      </div>
      <div className="logo-container" style={{backgroundColor: logoBackground}}>
        <div
          className="image-container"
          style={{backgroundColor: logoBackground}}
        >
          <Image
            src={logo}
            layout="fill"
            objectFit="contain"
            alt={`${company} logo`}
          />
        </div>
      </div>
      <div className="info-container">
        <div className="text-container">
          <h2>{company}</h2>
          <h4>{`${company.toLowerCase()}.com`}</h4>
        </div>
        <Link href={`/company/${id}`}>
          <button>Company Site</button>
        </Link>
      </div>
    </JobHeadingWrapper>
  );
};

const JobHeadingWrapper = styled.header`
  background-color: var(--color-bg-primary);
  margin-bottom: 30px;
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  .phone-container {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-22px);
    @media screen and ${device.tablet} {
      display: none;
    }
  }
  .logo-container {
    width: 140px;
    display: none;
    justify-content: center;
    align-items: center;
    .image-container {
      position: relative;
      width: 80px;
      height: 80px;
    }
    @media screen and ${device.tablet} {
      display: flex;
    }
  }
  .info-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px 0 30px 0;
    text-align: center;
    .text-container {
      margin-bottom: 20px;
      h2 {
        font-weight: 600;
        font-size: 22px;
        color: var(--color-job-title);
        margin-bottom: 16px;
      }
    }
    button {
      border: none;
      cursor: pointer;
      background-color: var(--color-bg-secondary);
      padding: 14px 0;
      width: 146px;
      color: var(--color-accent-primary);
      font-weight: 600;
      font-size: 15px;
      font-family: inherit;
      border-radius: var(--border-radius);
      transition: var(--transition);
      &:hover {
        background-color: var(--color-accent-primary);
        color: #fff;
      }
    }
  }
  @media screen and ${device.tablet} {
    .info-container {
      padding: 34px 50px;
      flex-direction: row;
      text-align: left;
    }
    .text-container {
      margin-bottom: 0;
    }
  }
`;

export default JobHeading;
