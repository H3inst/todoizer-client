const ProjectModels = require('../../models/project.models');
const { successResponse } = require('../../../../lib/response.helper');

async function getAllProjectsController(req, res, next) {
  try {
    const result = await ProjectModels.getAllProjectsModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function getProjectByIdController(req, res, next) {
  try {
    const result = await ProjectModels.getProjectByIdModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function createProjectController(req, res, next) {
  try {
    const result = await ProjectModels.createProjectModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function editProjectController(req, res, next) {
  try {
    const result = await ProjectModels.editProjectModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function deleteProjectController(req, res, next) {
  try {
    const result = await ProjectModels.deleteProjectModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProjectsController,
  getProjectByIdController,
  createProjectController,
  editProjectController,
  deleteProjectController
};