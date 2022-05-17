import DummyPageContainer from "../../components/ui/DummyPageContainer";
import {getCompanyName, getJobs} from "../../lib/mongodb";
const ObjectId = require("mongodb").ObjectId;

export default function Company({companyName}) {
  const companyContent = companyName
    .split(" ")
    .map((item, i) => <p key={i}>{item.toUpperCase()}</p>);
  return (
    <DummyPageContainer>
      {companyContent}
      <p>COMPANY</p>
      <p>PAGE</p>
    </DummyPageContainer>
  );
}

export async function getStaticPaths() {
  const jobs = await getJobs();
  const paths = jobs.map((item, i) => {
    return {params: {companyId: item._id.toString()}};
  });
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const {
    params: {companyId},
  } = context;
  const name = await getCompanyName(ObjectId(companyId));
  const {company} = name[0];
  return {
    props: {
      companyName: company,
    },
  };
}
