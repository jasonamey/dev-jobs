const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  const {jobId} = req.query;
  if (req.method === "GET") {
    return getJob(req, res);
  }
}

async function getJob(req, res) {
  const {jobId} = req.query;
  try {
    let {db} = await connectToDatabase();
    let job = await db
      .collection("dev-jobs")
      .find({_id: ObjectId(jobId)})
      .toArray();

    return res.json({
      devJob: job,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
    });
  }
}
