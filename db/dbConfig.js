import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',    // Replace with your MySQL host
  user: process.env.DB_USER,         // Replace with your MySQL username
  password: process.env.DB_PASSWORD, // Replace with your MySQL password
  database: process.env.DATABASE   // Replace with your MySQL database name
});

// Export the connection pool for use in other files
export default pool.promise();
