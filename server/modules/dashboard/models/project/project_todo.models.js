const Joi = require('joi');
const moment = require('moment');
const { TODO_STATUS } = require('../../../../constants/constants');

const generateId = require('../../../../lib/generateid');
const validateSchema = require('../../../../lib/validate.schema');
const ProjectTodoDAO = require('../../dao/project/project_todo.dao');

const PROJECT_TODO_SCHEMA = Joi.object({
  todo_id: Joi.string().max(15).required(),
  user_id: Joi.string().max(15).required(),
  project_id: Joi.string().max(15).required(),
  todo_description: Joi.string().max(255).optional().allow(''),
  todo_status: Joi.string().max(6),
  created_at: Joi.date()
});

class ProjectTodoModel {
  static async getAllTodos(request_object) {
    const user_id = request_object.user_id;
    const { project_id } = request_object.params;
    const todos = await ProjectTodoDAO.getAllTodos(user_id, project_id);

    return { todos };
  }

  static async getTodoById(request_object, project_id, todo_id) {
    const user_id = request_object.user_id;
    const todo = await ProjectTodoDAO.getTodoById(user_id, project_id, todo_id);

    return { todo };
  }

  static async createTodo(request_object) {
    const user_id = request_object.user_id;
    const { todo_description } = request_object.body;
    const { project_id } = request_object.params;
    const todo_id = generateId('T');
    const todo_status = TODO_STATUS.undone;
    const created_at = moment().format();

    const todo_data = {
      todo_id,
      user_id,
      project_id,
      todo_description,
      todo_status,
      created_at
    };

    validateSchema(PROJECT_TODO_SCHEMA, todo_data);
    return await ProjectTodoDAO.createTodo(todo_data);
  }

  static async editTodo(request_object) {
    const { project_id, todo_id } = request_object.params;
    const { todo_status, todo_description } = request_object.body;
    const user_id = request_object.user_id;

    const todo_data = {
      todo_id,
      user_id,
      project_id,
      todo_description,
      todo_status
    };

    validateSchema(PROJECT_TODO_SCHEMA, todo_data);
    if (todo_status) {
      await ProjectTodoDAO.editTodoStatus(todo_data);
      return {};
    }
    if (todo_description) {
      await ProjectTodoDAO.editTodoDescription(todo_data);
      return {};
    }
  }

  static async deleteTodo(request_object) {
    const { project_id, todo_id } = request_object.params;
    return await ProjectTodoDAO.deleteTodo(project_id, todo_id);
  }
}

module.exports = ProjectTodoModel;