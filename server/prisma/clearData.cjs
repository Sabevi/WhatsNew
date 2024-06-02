const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./prisma/dev.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

db.serialize(() => {
    db.run(`DELETE FROM User`, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Rows deleted ${this.changes}`);
    });

    db.run(`DELETE FROM Article`, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Rows deleted ${this.changes}`);
    });

    db.run(`DELETE FROM Like`, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Rows deleted ${this.changes}`);
    });

    db.run(`DELETE FROM Comment`, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Rows deleted ${this.changes}`);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});