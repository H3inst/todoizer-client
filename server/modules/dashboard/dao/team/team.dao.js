const pool = require('../../../../lib/database.connection');

async function getAllTeamsDao(user_id) {
  let result = await pool.query(
    `SELECT
      t.team_id,
      t.team_name,
      u.user_id
    FROM tz_teams t
    LEFT JOIN tz_users u ON t.user_id = u.user_id
    WHERE t.user_id = ?
    ORDER BY t.created_at ASC`,
    [user_id]
  );

  return result;
}

async function createTeamDao(team_data) {
  await pool.query(
    'INSERT INTO tz_teams SET ?',
    [team_data]
  );

  return {};
}

module.exports = {
  getAllTeamsDao,
  createTeamDao
};