import React from "react";
import JobHeading from "./JobHeading";
import Link from "next/link";
import styled from "@emotion/styled";
import {ButtonBase, PrimaryButtonColors} from "../styles/mixins";

const JobListing = ({job}) => {
  const {
    company,
    contract,
    description,
    location,
    logo,
    logoBackground,
    position,
    postedAt,
    role: {content: roleContent, items: roleItems},
    requirements: {content: reqContent, items: reqItems},
    role,
    _id: id,
  } = JSON.parse(job)[0];
  return (
    <JobListingWrapper>
      <JobHeading
        logo={logo}
        logoBackground={logoBackground}
        company={company}
        id={id}
      />
      <JobListingDetail>
        <div className="top-container">
          <div className="job-title-container">
            <span className="job-title-heading">
              {postedAt}
              <span className="dot">&middot;</span>
              {contract}
            </span>
            <h1>{position}</h1>
            <h4>{location}</h4>
          </div>
          <Link href={`/company/${id}`}>
            <button css={[ButtonBase, PrimaryButtonColors]}>Apply Now</button>
          </Link>
        </div>
        <div className="bottom-container">
          <p>{description}</p>
          <h2>Requirements</h2>
          <p>{reqContent}</p>
          <ul>
            {reqItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <h2>What Will You Do</h2>
          <p>{roleContent}</p>
          <ol>
            {roleItems.map((item, i) => (
              <JobListingOrderedItemWrapper key={i} idx={i + 1}>
                {item}
              </JobListingOrderedItemWrapper>
            ))}
          </ol>
        </div>
      </JobListingDetail>
    </JobListingWrapper>
  );
};

const JobListingWrapper = styled.section`
  transform: translateY(-30px);
  width: 738px;
`;

const JobListingDetail = styled.article`
  padding: 50px;
  width: 100%;
  background-color: var(--color-bg-primary);
  border-radius: var(--border-radius);
  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 52px;
    .job-title-container {
      h1 {
        color: var(--color-job-title);
        font-weight: 600;
        font-size: 26px;
        margin: 12px 0 16px 0;
      }
      h4 {
        font-weight: 600;
        color: var(--color-accent-primary);
        font-size: 14px;
      }
    }
  }
  .bottom-container {
    --margin-bottom: 40px;
    p {
      font-weight: 400;
      line-height: 1.4;
      font-size: 17px;
      margin-bottom: var(--margin-bottom);
    }
    h2 {
      font-size: 21px;
      color: var(--color-job-title);
      font-weight: 600;
      margin-bottom: var(--margin-bottom);
    }
    ul,
    ol {
      margin-left: 26px;
      position: relative;
      margin-bottom: var(--margin-bottom);
      li::before {
        color: var(--color-accent-primary);
        font-weight: 600;
        position: absolute;
        left: -26px;
      }
      li {
        line-height: 1.4;
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
    }
    ul li::before {
      content: "•";
      font-size: 20px;
      line-height: 1;
    }
  }
`;

const JobListingOrderedItemWrapper = styled.li`
  &::before {
    content: "${(props) => props.idx}.";
    font-size: 14px;
    line-height: 1.6;
  }
`;

export default JobListing;
