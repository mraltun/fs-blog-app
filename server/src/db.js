import { MongoClient } from "mongodb";

let db;

const connectToDb = async (cb) => {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.btiys.mongodb.net/?retryWrites=true&w=majority`
  );
  await client.connect();
  db = client.db("fsblogappdb");
  cb();
};

export { db, connectToDb };
