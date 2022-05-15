import React, {useState} from "react";
import SearchForm from "./SearchForm";
import JobItem from "./JobItem";
import styled from "@emotion/styled";

const JobList = (props) => {
  const allJobs = props.jobs;
  const [viewableJobs, setViewableJobs] = useState(() => allJobs);
  const [numJobsViewable, setNumJobsViewable] = useState(6);
  return (
    <JobListWrapper>
      <SearchForm setJobs={setViewableJobs} allJobs={allJobs} />
      <JobsWrapper>
        {viewableJobs.length === 0 ? (
          <p>No jobs fit that criteria!</p>
        ) : (
          viewableJobs.map((job, idx) => (
            <JobItem
              key={job.id.toString()}
              id={job.id.toString()}
              isViewable={idx < numJobsViewable}
              {...job}
            />
          ))
        )}
      </JobsWrapper>
      <button>hello</button>
    </JobListWrapper>
  );
};

const JobsWrapper = styled.section`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-row-gap: 60px;
  grid-template-columns: 300px 300px 300px;
  margin-block-start: 106px;
`;

const JobListWrapper = styled.div`
  width: var(--desktop-width);
`;

export default JobList;
