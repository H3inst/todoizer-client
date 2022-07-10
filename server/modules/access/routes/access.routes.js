const express = require('express');
const AccessController = require('../controllers/access.controllers');
const validateJsonWebToken = require('../../../middlewares/validate.jwt');

const router = express.Router();

router.post('/register', AccessController.registerUser);
router.post('/', AccessController.loginUser);
router.get('/', validateJsonWebToken, AccessController.validateToken);

module.exports = router;