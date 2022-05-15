import {MongoClient} from "mongodb";

export async function connectDatabase() {
  const client = MongoClient.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  });
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = await client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(
  client = connectDatabase(),
  collection = "dev-jobs",
  sort
) {
  const db = await client.db();
  try {
    const documents = await db
      .collection(collection)
      .find()
      .sort(sort)
      .toArray();
    return documents;
  } catch {
    console.log("ERROR", err);
    console.log("There was an error retrieving all the documents from MongoDB");
  }
}
