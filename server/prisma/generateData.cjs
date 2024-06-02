const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();

let db = new sqlite3.Database('./prisma/dev.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
};

const createJWT = (user) => {
    return jwt.sign(
        {id: user.id, username: user.username},
        process.env.JWT_SECRET,
    );
};

async function generateData() {
    const users = [];
    const userPromises = [];

    for(let i=0; i<5; i++) {
        const username = faker.internet.userName();
        const password = faker.internet.password();
        const hashedPassword = await hashPassword(password);
        const id = faker.datatype.uuid();
        const token = createJWT({id, username});

        const userPromise = new Promise((resolve, reject) => {
            db.run(`INSERT INTO User (id, username, password) VALUES (?, ?, ?)`, [id, username, hashedPassword], function(err) {
                if (err) {
                    return reject(err);
                }
                // The user is inserted into the database, now we can safely push it to the users array
                users.push({id, username, password, token});
                resolve();
            });
        });

        userPromises.push(userPromise);
    }

    // Wait for all user insert operations to complete
    await Promise.all(userPromises);

    for(let i=0; i<10; i++) {
        const id = faker.datatype.uuid();
        const title = faker.lorem.words(5);
        const description = faker.lorem.sentences(3);
        console.log('Users array before creating an article:', users);
        const userId = users[Math.floor(Math.random() * users.length)].id;
        db.run(`INSERT INTO Article (id, title, description, userId) VALUES (?, ?, ?, ?)`, [id, title, description, userId]);

        const likes = Math.floor(Math.random() * 6);
        for(let j=0; j<likes; j++) {
            const likeId = faker.datatype.uuid();
            console.log('Users array before creating a like:', users);
            const likeUserId = users[Math.floor(Math.random() * users.length)].id;
            db.run(`INSERT INTO Like (id, articleId, userId) VALUES (?, ?, ?)`, [likeId, id, likeUserId]);
        }

        const comments = Math.floor(Math.random() * 7);
        for(let j=0; j<comments; j++) {
            const commentId = faker.datatype.uuid();
            const content = faker.lorem.sentences(2);
            const commentUserId = users[Math.floor(Math.random() * users.length)].id;
            db.run(`INSERT INTO Comment (id, content, articleId, userId) VALUES (?, ?, ?, ?)`, [commentId, content, id, commentUserId]);
        }
    }

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');

        // Save users to fake-users.json
        fs.writeFile('fake-users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    });

    console.log(users);
}

generateData();