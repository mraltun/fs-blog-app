import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  // mongodb+srv://mraltun:<password>@cluster0.btiys.mongodb.net/?retryWrites=true&w=majority
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("fsblogappdb");

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  const db = client.db("fsblogappdb");
  await db.collection("articles").updateOne({ name }, { $inc: { upvotes: 1 } });
  const article = await db.collection("articles").findOne({ name });

  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes}`);
  } else {
    res.send("That article does not exits");
  }
});

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articlesInfo.find((item) => item.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send("That article does not exits");
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
