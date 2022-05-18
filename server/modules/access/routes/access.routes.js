const express = require('express');
const Access = require('../controllers/access.controllers');
const validateJsonWebToken = require('../../../middlewares/validate.jwt');

const router = express.Router();

router.post('/register', Access.registerUserController);
router.post('/', Access.loginUserController);
router.get('/', validateJsonWebToken, Access.validateTokenController);

module.exports = router;