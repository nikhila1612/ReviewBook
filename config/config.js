// config/config.js

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:16122000@localhost:5432/book';

module.exports = { DATABASE_URL };
