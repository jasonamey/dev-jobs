import {connectDatabase, insertDocument} from "./db-util";
import data from "../data.json";

export const doThings = async () => {
  const client = await connectDatabase();
  data.forEach(async (item) => {
    const doc = await insertDocument(client, "dev-jobs", item);
  });
};
