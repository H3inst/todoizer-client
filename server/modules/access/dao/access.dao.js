const pool = require('../../../lib/database.connection');

class AccessDAO {
  static async getUserByEmail(user_email) {
    const email = await pool.query(
      `SELECT * FROM tz_users
        WHERE user_email = ?
      `,
      [user_email]
    );
    return email;
  }


  static async registerUser(user) {
    await pool.query(
      'INSERT INTO tz_users SET ?',
      [user]
    );
  }
}

module.exports = AccessDAO;