const express = require('express');
const {
  loginUserController,
  validateTokenController,
  registerUserController
} = require('../controllers/access.controllers');
const validateJsonWebToken = require('../../../middlewares/validate.jwt');

const router = express.Router();

router.post('/register', registerUserController);
router.post('/', loginUserController);
router.get('/', validateJsonWebToken, validateTokenController);

module.exports = router;