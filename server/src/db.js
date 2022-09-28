import { MongoClient } from "mongodb";

let db;

const connectToDb = async (cb) => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  const db = client.db("fsblogappdb");
  cb();
};

export { db, connectToDb };
