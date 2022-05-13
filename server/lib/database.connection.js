const mysql = require('mysql');
const { promisify } = require('util');

const CONFIG_DB = require('../config/database.json');

const pool = mysql.createPool(CONFIG_DB);

pool.getConnection(function (error, connection) {
  if (error) {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
      throw new Error('Database connection was closed.');
    }
    if (error.code === 'ER_CON_COUNT_ERROR') {
      throw new Error('Database has too many connections.');
    }
    if (error.code === 'ECONNREFUSED') {
      throw new Error('Database connection was refused.');
    }
  }

  if (connection) connection.release();
  console.log('Database configuration mounted.');
  return;
});

pool.query = promisify(pool.query);

module.exports = pool;