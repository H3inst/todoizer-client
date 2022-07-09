const pool = require('../../../../lib/database.connection');

class ProjectTodoDAO {
  static async getAllTodos(user_id, project_id) {
    const todos = await pool.query(
      `SELECT 
        t.todo_id,
        t.todo_description,
        t.todo_status
      FROM tz_project_todos t
      LEFT JOIN tz_users u ON t.user_id = u.user_id
      LEFT JOIN tz_projects p ON t.project_id = p.project_id
      WHERE t.user_id = ?
      AND p.project_id = ?
      ORDER BY t.created_at DESC`,
      [user_id, project_id]
    );

    return todos;
  }

  static async createTodo(todo_data) {
    await pool.query(
      'INSERT INTO tz_project_todos SET ?',
      [todo_data]
    );

    return {};
  }

  static async editTodoDescription(todo_data) {
    await pool.query(
      `UPDATE tz_project_todos t
      SET t.todo_description = ?
      WHERE t.todo_id = ?
      AND t.project_id = ?
      AND t.user_id = ?`,
      [
        todo_data.todo_description,
        todo_data.todo_id,
        todo_data.project_id,
        todo_data.user_id
      ]
    );

    return {};
  }

  static async editTodoStatus(todo_data) {
    await pool.query(
      `UPDATE tz_project_todos t
    SET t.todo_status = ?
    WHERE t.todo_id = ?
    AND t.project_id = ?
    AND t.user_id = ?`,
      [
        todo_data.todo_status,
        todo_data.todo_id,
        todo_data.project_id,
        todo_data.user_id
      ]
    );

    return {};
  }

  static async deleteTodo(project_id, todo_id) {
    await pool.query(
      `DELETE FROM tz_project_todos t
    WHERE t.project_id = ?
    AND t.todo_id = ?`,
      [project_id, todo_id]
    );

    return {};
  }
}

module.exports = ProjectTodoDAO;