const mysql = require('mysql2/promise');

const conexiune = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Oracle123@',  // schimbă cu parola reală, uai
  database: 'sportmd',     // baza de date care o ai creat
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = conexiune;


