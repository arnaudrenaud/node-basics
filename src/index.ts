import express from "express";
import pg from "pg";

async function main() {
  const dbClient = new pg.Client(process.env.DATABASE_URL);
  await dbClient.connect();

  await dbClient.query(`CREATE TABLE IF NOT EXISTS "Post" (
    id SERIAL,
    content TEXT NOT NULL
  );`);
  await dbClient.query(
    `INSERT INTO "Post" ("content") VALUES ('Mon premier post.');`
  );

  const app = express();

  app.get("/", async (request, response) => {
    const dbResponse = await dbClient.query(
      `SELECT content FROM "Post" ORDER BY id DESC LIMIT 1;`
    );
    return response.send(dbResponse.rows[0].content);
  });

  app.post("/", async (request, response) => {
    await dbClient.query(
      `INSERT INTO "Post" ("content") VALUES ('Un nouveau post.');`
    );
    return response.send("Post créé.");
  });

  app.listen(3000, () => {
    console.log("Listening on port 3000.");
  });
}

main();
