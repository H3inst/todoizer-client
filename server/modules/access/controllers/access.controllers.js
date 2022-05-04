const AccessModels = require('../models/access.models');

const { successResponse } = require('../../../lib/response.helper');


async function createUserController(req, res, next) {
  try {
    let result = await AccessModels.createUserModel(req.body);
    successResponse(res, result);
  }
  catch (error) {
    next(error);
  }
}

async function loginUserController(req, res, next) {
  try {
    let result = await AccessModels.loginUserModel(req.body);
    successResponse(result);
  } 
  catch (error) {
    next(error);  
  }
}

async function validateTokenController(req, res, next) {
  try {
    let result;
    successResponse(result);
  } 
  catch (error) {
    next(error);  
  }
}

module.exports = {
  createUserController,
  loginUserController,
  validateTokenController
};