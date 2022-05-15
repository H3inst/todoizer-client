const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = require('../config/jwt');

function generateToken(user) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        user_id: user.user_id,
        user_name: user.user_name
      },
      JWT_SECRET_KEY,
      { expiresIn: '2h' },
      function (error, token) {
        if (error) {
          console.error(error);
          reject('Token could not be generated.');
        }
        resolve(token);
      });
  });
}

module.exports = generateToken;