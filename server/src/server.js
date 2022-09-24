import express from "express";

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
