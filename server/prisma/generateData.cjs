const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const faker = require("faker");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config();

NB_USERS = 10;
NB_ARTICLES = 60;

const articles = JSON.parse(
  fs.readFileSync("./prisma/articles-data.json", "utf8")
);

let db = new sqlite3.Database("./prisma/dev.db", (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  console.log("Connected to the database.");

  // Check if the User table exists
  db.get(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='User'",
    (err, row) => {
      if (err) {
        console.error(err.message);
        process.exit(1);
      }
      if (!row) {
        console.error(
          "The User table does not exist. Please run 'npm run prisma:migrate' to create the tables."
        );
        process.exit(1);
      }
    }
  );

  // Check if the Article table exists
  db.get(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='Article'",
    (err, row) => {
      if (err) {
        console.error(err.message);
        process.exit(1);
      }
      if (!row) {
        console.error(
          "The Article table does not exist. Please run 'npm run prisma:migrate' to create the tables."
        );
        process.exit(1);
      }
    }
  );

  // Check if the Comment table exists
  db.get(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='Comment'",
    (err, row) => {
      if (err) {
        console.error(err.message);
        process.exit(1);
      }
      if (!row) {
        console.error(
          "The Comment table does not exist. Please run 'npm run prisma:migrate' to create the tables."
        );
        process.exit(1);
      }
    }
  );

  // Check if the Like table exists
  db.get(
    "SELECT name FROM sqlite_master WHERE type='table' AND name='Like'",
    (err, row) => {
      if (err) {
        console.error(err.message);
        process.exit(1);
      }
      if (!row) {
        console.error(
          "The Like table does not exist. Please run 'npm run prisma:migrate' to create the tables."
        );
        process.exit(1);
      }
    }
  );
});

const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

const createJWT = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
};

async function generateData() {
  const users = [];
  const userPromises = [];
  console.log(`Generating ${NB_USERS} users...`);
  for (let i = 0; i < NB_USERS; i++) {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const hashedPassword = await hashPassword(password);
    const id = faker.datatype.uuid();
    const token = createJWT({ id, username });

    const userPromise = new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO User (id, username, password) VALUES (?, ?, ?)`,
        [id, username, hashedPassword],
        function (err) {
          if (err) {
            return reject(err);
          }
          // The user is inserted into the database, now we can safely push it to the users array
          users.push({ id, username, password, token });
          resolve();
        }
      );
    });

    userPromises.push(userPromise);
  }

  // Create a new Date object with the date
  const date = new Date('2024-06-13');

// Get the timestamp in milliseconds
  const timestamp = date.getTime();

  console.log(timestamp); // Outputs: 1718649600000

  // Wait for all user insert operations to complete
  await Promise.all(userPromises);
  console.log(`Generating ${articles.length} articles, likes and comments...`);
  for (let i = 0; i < articles.length; i++) {
    const id = faker.datatype.uuid();
    const title = articles[i].title;
    const description = articles[i].description;
    const publishedAt = articles[i].date;
    const userId = users[Math.floor(Math.random() * users.length)].id;
    db.run(
      `INSERT INTO Article (id, title, description, userId, publishedAt) VALUES (?, ?, ?, ?, ?)`,
      [id, title, description, userId, publishedAt]
    );

    const likes = Math.floor(Math.random() * 6);
    for (let j = 0; j < likes; j++) {
      const likeId = faker.datatype.uuid();
      const likeUserId = users[Math.floor(Math.random() * users.length)].id;
      db.run(`INSERT INTO Like (id, articleId, userId) VALUES (?, ?, ?)`, [
        likeId,
        id,
        likeUserId,
      ]);
    }

    const comments = articles[i].comments;
    for (let j = 0; j < comments.length; j++) {
      const commentId = faker.datatype.uuid();
      const content = comments[j];
      const commentUserId = users[Math.floor(Math.random() * users.length)].id;
      db.run(
        `INSERT INTO Comment (id, content, articleId, userId) VALUES (?, ?, ?, ?)`,
        [commentId, content, id, commentUserId]
      );
    }
  }

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");

    // Save users to fake-users.json
    fs.writeFile(
      "prisma/fake-users.json",
      JSON.stringify(users, null, 2),
      (err) => {
        if (err) throw err;
        console.log("Data written to file prisma/fake-users.json");
      }
    );
  });
}

generateData();
