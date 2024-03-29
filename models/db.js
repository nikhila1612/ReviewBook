
// models/db.js

const { Pool } = require('pg');
const { DATABASE_URL } = require('../config/config');

const pool = new Pool({
  connectionString: DATABASE_URL,
});

module.exports = {
  async connect() {
    try {
      const client = await pool.connect();
      console.log('Connected to the database');
      return client;
    } catch (err) {
      console.error('Error connecting to the database:', err);
      throw err;
    }
  },
  async query(text, params) {
    const client = await this.connect();
    try {
      const result = await client.query(text, params);
      return result;
    } catch (err) {
      console.error('Database query error:', err);
      throw err;
    } finally {
      client.release();
    }
  },
};
