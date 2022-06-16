const TeamModels = require('../../models/team/team.models');
const { successResponse } = require('../../../../lib/response.helper');

async function getAllTeamsController(req, res, next) {
  try {
    const result = await TeamModels.getAllTeamsModel();
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function getTeamByIdController(req, res, next) {
  try {
    const result = await TeamModels.getTeamByIdModel();
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function createTeamController(req, res, next) {
  try {
    const result = await TeamModels.createTeamModel();
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function editTeamController(req, res, next) {
  try {
    const result = await TeamModels.editTeamModel();
    successResponse(res, result);

  } catch (error) {
    next(error);
  }
}

async function deleteTeamController(req, res, next) {
  try {
    const result = await TeamModels.deleteTeamModel();
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