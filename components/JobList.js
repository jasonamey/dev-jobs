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
              key={job._id.toString()}
              id={job._id.toString()}
              {...job}
            />
          ))
        )}
      </JobsWrapper>
      <button>View</button>
    </JobListWrapper>
  );
};

const JobsWrapper = styled.section`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-row-gap: 60px;
  grid-template-columns: 300px 300px 300px;
  margin-top: 50px;
`;

const JobListWrapper = styled.div`
  width: var(--desktop-width);
`;

export default JobList;
