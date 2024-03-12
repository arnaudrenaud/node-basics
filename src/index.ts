import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
