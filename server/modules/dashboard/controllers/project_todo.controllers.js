const ProjectTodoModels = require('../models/project_todo.models');

const { successResponse } = require('../../../lib/response.helper');

async function getAllTodosController(req, res, next) {
  try {
    const result = await ProjectTodoModels.getAllTodosModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function getTodoByIdController(req, res, next) {
  try {
    const result = await ProjectTodoModels.getTodoByIdModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function createTodoController(req, res, next) {
  try {
    const result = await ProjectTodoModels.createTodoModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function editTodoController(req, res, next) {
  try {
    const result = await ProjectTodoModels.editTodoModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
    
  }
}

async function deleteTodoController(req, res, next) {
  try {
    const result = await ProjectTodoModels.deleteTodoModal(req);
    successResponse(res, result);
    
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllTodosController,
  getTodoByIdController,
  createTodoController,
  editTodoController,
  deleteTodoController
};