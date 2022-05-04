const express = require('express');
const {
  createUserController,
  loginUserController,
  validateTokenController
} = require('../controllers/access.controllers');

const router = express.Router();

router.post('/new', createUserController);
router.post('/', loginUserController);
router.get('/', validateTokenController);

module.exports = router;