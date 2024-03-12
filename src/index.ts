import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send("Hello world!");
});

app.listen(5500, () => {
  console.log("Listening on port 5500.");
});
