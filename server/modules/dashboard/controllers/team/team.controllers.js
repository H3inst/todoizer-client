const TeamModels = require('../../models/team/team.models');
const { successResponse } = require('../../../../lib/response.helper');

async function getAllTeamsController(req, res, next) {
  try {
    const result = await TeamModels.getAllTeamsModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function getTeamByIdController(req, res, next) {
  try {
    const result = await TeamModels.getTeamByIdModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function createTeamController(req, res, next) {
  try {
    const result = await TeamModels.createTeamModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function editTeamController(req, res, next) {
  try {
    const result = await TeamModels.editTeamModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function deleteTeamController(req, res, next) {
  try {
    const result = await TeamModels.deleteTeamModel(req);
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllTeamsController,
  getTeamByIdController,
  createTeamController,
  editTeamController,
  deleteTeamController
};