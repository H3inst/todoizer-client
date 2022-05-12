const { connection, beginConnection, endConnection } = require('../../../lib/database.connection');

async function getUserByEmailDao(email) {
  beginConnection();
  connection.query(
    `
        SELECT * FROM tz_users
        WHERE user_email = ?
      `,
    [email],
    function (error, results) {
      if (error) throw error;

      return results;
    });
  endConnection();
}

async function registerUserDao(user) {
  console.log(user);
}

module.exports = {
  getUserByEmailDao,
  registerUserDao
};