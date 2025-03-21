require('dotenv').config();
const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: process.env.HOST || "localhost", // or wherever the db is hosted
  user: process.env.USER || "<role_name>",
  database: process.env.DATABASE || "top_users",
  password: process.env.PASSWORD || "<role_password>",
  port: 5432 // The default port
});