const AccessModel = require('../models/access.models');

const ResponseHelper = require('../../../lib/response.helper');

class AccessController {

  static async registerUser(req, res, next) {
    try {
      let result = await AccessModel.registerUser(req.body);
      ResponseHelper.successResponse(res, result);
    }
    catch (error) {
      next(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      let result = await AccessModel.loginUser(req.body);
      ResponseHelper.successResponse(res, result);
    }
    catch (error) {
      next(error);
    }
  }

  static async validateToken(req, res, next) {
    try {
      let payload = {
        user_id: req.user_id,
        user_name: req.user_name
      };
      ResponseHelper.successResponse(res, payload);
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = AccessController;