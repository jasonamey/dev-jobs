import React, {useState} from "react";
import SearchForm from "./SearchForm";
import JobItem from "./JobItem";
import styled from "@emotion/styled";
import {ButtonBase, PrimaryButtonColors} from "../styles/mixins";

const JobList = (props) => {
  const allJobs = props.jobs;
  const [viewableJobs, setViewableJobs] = useState(() => allJobs);
  const [numJobsViewable, setNumJobsViewable] = useState(6);
  const clickHandler = () => {
    setNumJobsViewable((prev) => prev + 6);
  };
  return (
    <JobListWrapper>
      <SearchForm setJobs={setViewableJobs} allJobs={allJobs} />
      <JobsWrapper>
        {viewableJobs.length === 0 ? (
          <p>No jobs fit that criteria!</p>
        ) : (
          viewableJobs.map((job, idx) => (
            <JobItem
              key={job._id.toString()}
              id={job._id.toString()}
              {...job}
            />
          ))
        )}
      </JobsWrapper>
      <div className="button-container">
        <button css={[ButtonBase, PrimaryButtonColors]}>View</button>
      </div>
    </JobListWrapper>
  );
};

const JobsWrapper = styled.section`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-row-gap: 60px;
  grid-template-columns: 300px 300px 300px;
  margin: 50px 0 60px 0;
`;

const JobListWrapper = styled.div`
  width: var(--desktop-width);
  .button-container {
    text-align: center;
  }
`;

export default JobList;
