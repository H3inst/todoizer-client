const ProjectModels = require('../models/project.models');
const { successResponse } = require('../../../lib/response.helper');

async function getAllProjects(req, res, next) {
  try {
    const result = await ProjectModels.getAllProjects(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function getProjectById(req, res, next) {
  try {
    const result = await ProjectModels.getProjectById(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function createProject(req, res, next) {
  try {
    const result = await ProjectModels.createProject(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function editProject(req, res, next) {
  try {
    const result = await ProjectModels.req(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function deleteProject(req, res, next) {
  try {
    const result = await ProjectModels.deleteProject(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  editProject,
  deleteProject
};