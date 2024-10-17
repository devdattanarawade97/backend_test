import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import getCountRoutes from './routes/getCountRoutes.js';

import { fileURLToPath } from 'url';

// Path to SQLite database 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const port = 3000;


// Middleware to parse JSON
app.use(express.json());

// Use the todo routes
app.use('/api', getCountRoutes);

// Simple route for health check
app.get('/', (req, res) => {
  res.status(200).send('API is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;