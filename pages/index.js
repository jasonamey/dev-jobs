import * as React from "react";
import PageContainer from "../components/ui/PageContainer";
import JobList from "../components/JobList";
import {getJobs} from "../lib/mongodb";

export default function Home(props) {
  const {jobs} = props;

  return (
    <>
      <PageContainer>
        <JobList jobs={JSON.parse(jobs)} />
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const jobs = await getJobs();
  return {
    props: {
      jobs: JSON.stringify(jobs),
    },
  };
}
