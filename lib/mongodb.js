import {MongoClient} from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  let client = new MongoClient(MONGODB_URI, options);

  await client.connect();
  let db = client.db(MONGODB_DB);
  cachedClient = client;
  cachedDb = db;
  return {
    client: cachedClient,
    db: cachedDb,
  };
}

export async function getJobs() {
  const {db} = await connectToDatabase();
  const jobs = await db
    .collection("dev-jobs")
    .find()
    .project({
      company: 1,
      contract: 1,
      position: 1,
      postedAt: 1,
      location: 1,
      logo: 1,
      logoBackground: 1,
    })
    .toArray();
  return jobs;
}

export async function getJob(id) {
  const {db} = await connectToDatabase();
  const job = await db.collection("dev-jobs").find({_id: id}).toArray();
  return job;
}

export async function getCompanyName(id) {
  const {db} = await connectToDatabase();
  const name = await db
    .collection("dev-jobs")
    .find({_id: id})
    .project({company: 1})
    .toArray();
  return name;
}
