const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'customeragi.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('✅ Connected to the local SQLite database.');
        db.run(`
            CREATE TABLE IF NOT EXISTS document_mappings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tenant_id TEXT NOT NULL,
                document_id TEXT NOT NULL UNIQUE,
                file_name TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `, (err) => {
            if (err) {
                console.error("Error creating table:", err.message);
            } else {
                console.log("✅ Table 'document_mappings' is ready.");
            }
        });
    }
});

module.exports = db;
