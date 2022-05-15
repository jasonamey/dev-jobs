import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";

const JobItem = ({
  company,
  contract,
  position,
  id,
  postedAt,
  location,
  logo,
  logoBackground,
  isViewable,
}) => {
  return (
    <JobItemWrapper isViewable={isViewable}>
      <div className="icon-container" style={{backgroundColor: logoBackground}}>
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
        <h3 className="row-1-h3">
          {postedAt} {contract}
        </h3>
        <Link href={`/${id}`}>
          <h2 className="row-2-h2">{position}</h2>
        </Link>
        <h3 className="row-3-h3">{company}</h3>
        <h4 className="row-4-h4">{location}</h4>
      </div>
    </JobItemWrapper>
  );
};

export default JobItem;

const JobItemWrapper = styled.article`
  background-color: var(--color-bg-primary);
  position: relative;
  padding-inline: 36px;
  border-radius: 6px;
  padding-block-end: 40px;
  display: ${(props) => (props.isViewable ? "block" : "none")};
  .icon-container {
    position: absolute;
    transform: translate(0, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    border-radius: 15px;

    .image-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 30px;
      background: green;
    }
  }
  .info-container {
    margin-block-start: 50px;
    h2 {
      cursor: pointer;
      color: var(--color-job-title);
      font-weight: 600;
      line-height: 1.2;
    }
    h3 {
      font-size: 16px;
      color: var(--color-text-secondary);
    }
    .row-1-h3 {
      margin-block-end: 20px;
    }
    .row-2-h2 {
      margin-block-end: 20px;
    }
    .row-3-h3 {
      margin-block-end: 50px;
    }
    .row-4-h4 {
      color: var(--color-accent-primary);
      font-weight: 600;
    }
  }
`;