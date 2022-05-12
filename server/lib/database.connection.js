const mysql = require('mysql');
const CONFIG_DB = require('../config/database.json');

const connection = mysql.createConnection(CONFIG_DB);

function beginConnection() {
  connection.connect(function (error) {
    if (error) throw error;
    console.log('Database configuration mounted.');
  });
}

function endConnection() {
  connection.end(function (error) {
    if (error) throw error;
    console.log('Database configuration ended');
  });
}

module.exports = {
  connection,
  beginConnection,
  endConnection
};