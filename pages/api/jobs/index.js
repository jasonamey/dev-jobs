const {connectToDatabase} = require("../../../lib/mongodb");

export default async function handler(req, res) {
  if (req.method === "GET") {
    return getJobs(req, res);
  }
}

async function getJobs(req, res) {
  try {
    let {db} = await connectToDatabase();
    let jobs = await db.collection("dev-jobs").find().toArray();
    return res.json({
      devJob: jobs,
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
    });
  }
}
