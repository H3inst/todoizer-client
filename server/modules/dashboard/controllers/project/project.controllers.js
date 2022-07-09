const ProjectModel = require('../../models/project/project.models');
const ResponseHelper = require('../../../../lib/response.helper');

class ProjectController {
  static async getAllProjects(req, res, next) {
    try {
      const result = await ProjectModel.getAllProjects(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async getProjectById(req, res, next) {
    try {
      const result = await ProjectModel.getProjectById(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async createProject(req, res, next) {
    try {
      const result = await ProjectModel.createProject(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async editProject(req, res, next) {
    try {
      const result = await ProjectModel.editProject(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async deleteProject(req, res, next) {
    try {
      const result = await ProjectModel.deleteProject(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProjectController;