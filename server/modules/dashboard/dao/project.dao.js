const pool = require('../../../lib/database.connection');

async function getAllProjectsDao(user_id) {
  const projects = await pool.query(
    `
    SELECT
      p.project_id,
      p.project_name,
      u.user_id
    FROM tz_projects p
    LEFT JOIN tz_users u ON p.user_id = u.user_id
    WHERE p.user_id = ?
    `,
    [user_id]
  );

  return projects;
}

async function getProjectById(project_id) {
  const result = await pool.query(
    `SELECT * FROM tz_projects p 
    WHERE p.project_id = ?`,
    [project_id]
  );

  return result;
}

async function createProjectDao(project_data) {
  await pool.query(
    'INSERT INTO tz_projects SET ?',
    [project_data]
  );

  return {};
}

async function editProjectDao() {
  await pool.query('UPDATE tz_projects SET ?', []);
}

async function deleteProjectDao(project_id) {
  await pool.query('DELETE FROM tz_projects p WHERE p.project_id = ?', [project_id]);

  return {};
}

module.exports = {
  getAllProjectsDao,
  getProjectById,
  createProjectDao,
  editProjectDao,
  deleteProjectDao
};