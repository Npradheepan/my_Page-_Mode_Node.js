const mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
  connectionLimit: 100,
  host                    : process.env.DB_HOST,
  user                    : process.env.DB_USER,
  password            : process.env.DB_PASS,
  database             : process.env.DB_NAME
});
//connection DB
pool.getConnection((err, connection) => {
  if(err){
      throw err;// if not DB Connected!
  }console.log('Connected as ID' +connection.threadId);
})

module.exports = pool