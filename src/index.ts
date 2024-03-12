import express from "express";
import pg from "pg";

const dbClient = new pg.Client(
  "postgres://postgres:password@database:5432/postgres"
);
dbClient.connect();

dbClient.query(`CREATE TABLE IF NOT EXISTS "Post" (
  id SERIAL,
  content TEXT NOT NULL
);`);
dbClient.query(`INSERT INTO "Post" ("content") VALUES ('Mon premier post.');`);

const app = express();

app.get("/", async (request, response) => {
  return response.send(await dbClient.query(`SELECT * FROM "Post";`));
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
