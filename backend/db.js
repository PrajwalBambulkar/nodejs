// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'yourpassword',
    database: process.env.DB_NAME || 'testdb',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306
});

connection.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        process.exit(1);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = connection;
