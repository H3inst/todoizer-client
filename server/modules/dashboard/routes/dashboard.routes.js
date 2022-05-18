const express = require('express');

const ProjectControllers = require('../controllers/project.controllers');

const router = express.Router();

router.get('/projects/', ProjectControllers.getAllProjects);
router.get('/projects/:project_id', ProjectControllers.getProjectById);
router.post('/projects/', ProjectControllers.createProject);
router.put('/projects/:project_id', ProjectControllers.editProject);
router.delete('/projects/project_id', ProjectControllers.deleteProject);

module.exports = router;