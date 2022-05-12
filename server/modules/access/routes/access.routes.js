const express = require('express');
const {
  loginUserController,
  validateTokenController,
  registerUserController
} = require('../controllers/access.controllers');

const router = express.Router();

router.post('/new', registerUserController);
router.post('/', loginUserController);
router.get('/', validateTokenController);

module.exports = router;