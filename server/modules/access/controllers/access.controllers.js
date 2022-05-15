const { loginUserModel, registerUserModel } = require('../models/access.models');

const { successResponse } = require('../../../lib/response.helper');


async function registerUserController(req, res, next) {
  try {
    let result = await registerUserModel(req.body);
    successResponse(res, result);
  }
  catch (error) {
    next(error);
  }
}

async function loginUserController(req, res, next) {
  try {
    let result = await loginUserModel(req.body);
    successResponse(res, result);
  }
  catch (error) {
    next(error);
  }
}

async function validateTokenController(req, res, next) {
  try {
    let payload = {
      user_id: req.user_id,
      user_name: req.user_name
    };
    successResponse(res, payload);
  }
  catch (error) {
    next(error);
  }
}

module.exports = {
  registerUserController,
  loginUserController,
  validateTokenController
};