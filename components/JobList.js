import React, {useState} from "react";
import SearchForm from "./SearchForm";
import JobItem from "./JobItem";
import styled from "@emotion/styled";
import {ButtonBase, PrimaryButtonColors} from "../styles/mixins";
import {device} from "../styles/devices";

const JobList = (props) => {
  const allJobs = props.jobs;
  const [viewableJobs, setViewableJobs] = useState(() => allJobs);
  const [numJobsViewable, setNumJobsViewable] = useState(12);

  const clickHandler = () => {
    setNumJobsViewable((prev) => prev + 12);
  };
  return (
    <JobListWrapper>
      <SearchForm
        setJobs={setViewableJobs}
        allJobs={allJobs}
        numOfTotalJobs={allJobs.length}
      />
      <JobsWrapper>
        {viewableJobs.length === 0 ? (
          <p>No jobs fit that criteria!</p>
        ) : (
          viewableJobs.map((job, idx) => (
            <JobItem
              key={job._id.toString()}
              id={job._id.toString()}
              isViewable={idx < numJobsViewable}
              {...job}
            />
          ))
        )}
      </JobsWrapper>
      {viewableJobs.length === allJobs.length &&
        numJobsViewable < allJobs.length && (
          <div className="button-container">
            <button
              css={[ButtonBase, PrimaryButtonColors]}
              onClick={clickHandler}
            >
              View
            </button>
          </div>
        )}
    </JobListWrapper>
  );
};

const JobsWrapper = styled.section`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-row-gap: 60px;
  grid-column-gap: 20px;
  grid-template-columns: minmax(300px, 360px);
  margin: 50px 0 60px 0;
  @media screen and ${device.tablet} {
    grid-template-columns: repeat(2, minmax(300px, 360px));
  }
  @media screen and ${device.laptop} {
    grid-template-columns: repeat(3, minmax(300px, 360px));
    justify-content: space-between;
    grid-column-gap: 30px;
    grid-row-gap: 60px;
  }
`;

const JobListWrapper = styled.div`
  width: var(--desktop-width);
  .button-container {
    text-align: center;
  }
`;

export default JobList;
