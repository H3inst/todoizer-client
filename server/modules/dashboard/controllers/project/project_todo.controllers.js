const ProjectTodoModel = require('../../models/project/project_todo.models');

const ResponseHelper = require('../../../../lib/response.helper');

class ProjectTodoController {

  static async getAllTodos(req, res, next) {
    try {
      const result = await ProjectTodoModel.getAllTodos(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async getTodoById(req, res, next) {
    try {
      const result = await ProjectTodoModel.getTodoById(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async createTodo(req, res, next) {
    try {
      const result = await ProjectTodoModel.createTodo(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async editTodo(req, res, next) {
    try {
      const result = await ProjectTodoModel.editTodo(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);

    }
  }

  static async deleteTodo(req, res, next) {
    try {
      const result = await ProjectTodoModel.deleteTodo(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProjectTodoController;