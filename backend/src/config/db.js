const mysql = require("mysql2/promise"); // use promise-based API
require("dotenv").config();

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // max simultaneous connections
    queueLimit: 0
});

// Optional: test connection
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log("✅ MySQL pool connected successfully");
        connection.release(); // release connection back to pool
    } catch (err) {
        console.error("❌ MySQL pool connection failed:", err.message);
    }
})();

module.exports = pool;
