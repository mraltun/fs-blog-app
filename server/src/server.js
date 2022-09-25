import express from "express";
import { db, connectToDb } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  // mongodb+srv://mraltun:<password>@cluster0.btiys.mongodb.net/?retryWrites=true&w=majority

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  await db.collection("articles").updateOne({ name }, { $inc: { upvotes: 1 } });
  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send("That article does not exits");
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  await db
    .collection("articles")
    .updateOne({ name }, { $push: { comments: { postedBy, text } } });

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send("That article does not exits");
  }
});

connectToDb(() => {
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
});
