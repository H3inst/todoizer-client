const pool = require('../../../lib/database.connection');

async function getUserByEmailDao(user_email) {
  const email = await pool.query(
    `SELECT * FROM tz_users
      WHERE user_email = ?
    `,
    [user_email]
  );
  return email;
}

async function registerUserDao(user) {
  await pool.query(
    'INSERT INTO tz_users SET ?',
    [user]
  );
}

module.exports = {
  getUserByEmailDao,
  registerUserDao
};