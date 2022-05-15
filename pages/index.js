import * as React from "react";
import styled from "@emotion/styled";
import PageContainer from "../components/ui/PageContainer";
import JobList from "../components/JobList";
import {getJobs} from "../lib/mongodb";
// import {dummyJobs} from "../helpers/dumb-data";
export default function Home(props) {
  const {jobs} = props;
  return (
    <PageContainer>
      <JobList jobs={JSON.parse(jobs)} />
    </PageContainer>
  );
}

const Container = styled.div``;

export async function getStaticProps() {
  const jobs = await getJobs();
  return {
    props: {
      jobs: JSON.stringify(jobs),
      // jobs: JSON.stringify(dummyJobs),
    },
  };
}
