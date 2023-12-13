const mysql = require('mysql2');
const dbpool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: '',
});

module.exports = dbpool.promise();
