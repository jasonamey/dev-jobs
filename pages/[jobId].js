import {getJobs, getJob} from "../lib/mongodb";
import PageContainer from "../components/ui/PageContainer";
import JobListing from "../components/JobListing";
const ObjectId = require("mongodb").ObjectId;

export default function Job({job}) {
  return (
    <PageContainer>
      <JobListing job={job} />
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const jobs = await getJobs();
  const paths = jobs.map((item, i) => {
    return {params: {jobId: item._id.toString()}};
  });

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const {
    params: {jobId},
  } = context;
  const job = await getJob(ObjectId(jobId));
  return {
    props: {
      job: JSON.stringify(job),
    },
  };
}
