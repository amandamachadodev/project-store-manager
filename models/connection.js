const mysql = require('mysql2/promise');

const user = 'amanda';
const senha = 'jorge0423';

const connection = mysql.createPool({
  user: process.env.MYSQL_USER || user,
  password: process.env.MYSQL_PASSWORD || senha,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: 'StoreManager',
});

module.exports = connection;