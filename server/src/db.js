import { MongoClient } from "mongodb";
let db;

const connectToDb = async (cb) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("fsblogappdb");
  cb();
};

export { db, connectToDb };
