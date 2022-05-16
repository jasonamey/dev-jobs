import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
const JobHeading = ({logo, logoBackground, company}) => {
  return (
    <JobHeadingWrapper>
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
        <Link href="/">
          <button>Company Site</button>
        </Link>
      </div>
    </JobHeadingWrapper>
  );
};

const JobHeadingWrapper = styled.header`
  --padding-header-block: 40px;
  --padding-header-inline: 50px;
  background-color: var(--color-bg-primary);
  margin-bottom: 30px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  .logo-container {
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    .image-container {
      position: relative;
      width: 80px;
      height: 80px;
    }
  }
  .info-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-header-block) var(--padding-header-inline);
    h2 {
      font-weight: 600;
      font-size: 22px;
      color: var(--color-job-title);
      margin-bottom: 16px;
    }
    button {
      border: none;
      cursor: pointer;
      background-color: var(--color-accent-tertiary);
      padding: 14px 0;
      width: 146px;
      color: var(--color-accent-primary);
      font-weight: 600;
      font-size: 15px;
      font-family: inherit;
      border-radius: 4px;
    }
  }
`;

export default JobHeading;
