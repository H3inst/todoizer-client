const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET_KEY = require('../config/jwt');

function validateJsonWebToken(req, _res, next) {
  const token = req.header('Authorization');

  if (!token) {
    throw new Error('The token was not provided.');
  }

  try {
    const payload = jsonwebtoken.verify(token, JWT_SECRET_KEY);
    req.user_id = payload.user_id;
    req.user_name = payload.user_name;
    next();

  } catch (error) {
    throw new Error('Token provided is not valid.');
  }
}

module.exports = validateJsonWebToken;