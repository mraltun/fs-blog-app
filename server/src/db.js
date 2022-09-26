import { MongoClient } from "mongodb";
let db;

// mongodb+srv://mraltun:<password>@cluster0.btiys.mongodb.net/?retryWrites=true&w=majority

const connectToDb = async (cb) => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("fsblogappdb");
  cb();
};

export { db, connectToDb };
