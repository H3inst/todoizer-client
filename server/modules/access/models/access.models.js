const { registerUserDao, getUserByEmailDao } = require('../dao/access.dao');

async function registerUserModel(user) {
  const hasEmail = await getUserByEmailDao(user.user_email);

  if (hasEmail) {
    throw new Error('The email you are trying to use already exists.');
  }

  delete user.user_confirm_password;
  await registerUserDao(user);

  return {};
}

async function loginUserModel(payload) {
  return payload;
}

module.exports = {
  registerUserModel,
  loginUserModel
};