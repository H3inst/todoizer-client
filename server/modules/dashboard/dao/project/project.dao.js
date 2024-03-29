const pool = require('../../../../lib/database.connection');

class ProjectDAO {

  static async getAllProjects(user_id) {
    const projects = await pool.query(
      `SELECT
        p.project_id,
        p.project_name,
        u.user_id,
        COUNT(t.todo_id) as total_count_todos
      FROM tz_projects p
      LEFT JOIN tz_users u ON p.user_id = u.user_id
      LEFT JOIN tz_project_todos t ON p.project_id = t.project_id
      WHERE p.user_id = ?
      GROUP BY p.project_id, p.project_id
      ORDER BY p.created_at ASC`,
      [user_id]
    );

    return projects;
  }

  static async getProjectById(project_id) {
    const result = await pool.query(
      `SELECT
        p.project_id,
        p.project_name,
        p.created_at
      FROM tz_projects p 
      WHERE p.project_id = ?`,
      [project_id]
    );

    return result;
  }

  static async createProject(project_data) {
    await pool.query(
      'INSERT INTO tz_projects SET ?',
      [project_data]
    );

    return {};
  }

  static async editProject(project_data) {
    await pool.query(
      `UPDATE tz_projects p
      SET project_name = ?
      WHERE p.user_id = ?
      AND p.project_id = ?`,
      [
        project_data.project_name,
        project_data.user_id,
        project_data.project_id
      ]);
  }

  static async deleteProject(project_id) {
    await pool.query(
      'DELETE FROM tz_project_todos t WHERE t.project_id = ?',
      [project_id]
    );
    await pool.query(
      'DELETE FROM tz_projects p WHERE p.project_id = ?',
      [project_id]
    );

    return {};
  }
}

module.exports = ProjectDAO;