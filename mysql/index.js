const mysql = require('mysql')
const config = require('../config/default')

const pool = mysql.createPool({
  host: config.database.HOST,
  user:config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})

function query() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM user_info', (err, res, fields) => {
      if (err) throw err
      resolve(res)
    })
  })
}

module.exports = query