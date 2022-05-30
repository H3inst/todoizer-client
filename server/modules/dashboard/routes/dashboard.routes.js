const express = require('express');
const validateJsonWebToken = require('../../../middlewares/validate.jwt');

const ProjectControllers = require('../controllers/project.controllers');

const router = express.Router();

router.use(validateJsonWebToken);

router.get('/projects/', ProjectControllers.getAllProjectsController);
router.get('/projects/:project_id', ProjectControllers.getProjectByIdController);
router.post('/projects/', ProjectControllers.createProjectController);
router.put('/projects/:project_id', ProjectControllers.editProjectController);
router.delete('/projects/:project_id', ProjectControllers.deleteProjectController);

module.exports = router;