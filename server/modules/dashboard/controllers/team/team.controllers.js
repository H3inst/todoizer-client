const TeamModel = require('../../models/team/team.models');
const ResponseHelper = require('../../../../lib/response.helper');

class TeamController {
  static async getAllTeams(req, res, next) {
    try {
      const result = await TeamModel.getAllTeams(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async getTeamById(req, res, next) {
    try {
      const result = await TeamModel.getTeamById(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async createTeam(req, res, next) {
    try {
      const result = await TeamModel.createTeam(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async editTeam(req, res, next) {
    try {
      const result = await TeamModel.editTeam(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }

  static async deleteTeam(req, res, next) {
    try {
      const result = await TeamModel.deleteTeam(req);
      ResponseHelper.successResponse(res, result);

    } catch (error) {
      next(error);
    }
  }
}

module.exports = TeamController;