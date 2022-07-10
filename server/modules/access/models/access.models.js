const Joi = require('joi');
const bcrypt = require('bcrypt');

const generateId = require('../../../lib/generateid');
const validateSchema = require('../../../lib/validate.schema');
const generateToken = require('../../../lib/generate.token');
const AccessDAO = require('../dao/access.dao');

const USER_SCHEMA = Joi.object({
  user_id: Joi.string().max(15).required(),
  user_name: Joi.string().max(15).required(),
  user_email: Joi.string().max(30).required(),
  user_password: Joi.string().required()
});

class AccessModel {
  static async registerUser(user) {
    const user_id = generateId('U');
    const email = await AccessDAO.getUserByEmail(user.user_email);

    if (email.length > 0) {
      throw new Error('The email you are trying to use already exists.');
    }

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(user.user_password, salt);

    user.user_id = user_id;
    user.user_password = hash;

    delete user.user_confirm_password;

    validateSchema(USER_SCHEMA, user);
    await AccessDAO.registerUser(user);

    return {};
  }

  static async loginUser(user) {
    const query = await AccessDAO.getUserByEmail(user.user_email);

    if (query.length > 0) {
      const result = query[0];
      const isMatchedPassword = bcrypt.compareSync(user.user_password, result.user_password);

      if (!isMatchedPassword) {
        throw new Error('Email or password are not correct. Please verify.');
      }
      const token = await generateToken({
        user_id: result.user_id,
        user_name: result.user_name
      });

      return {
        token,
        user: {
          user_id: result.user_id,
          user_name: result.user_name
        }
      };

    } else {
      throw new Error('Email or password are not correct. Please verify.');
    }
  }
}

module.exports = AccessModel;