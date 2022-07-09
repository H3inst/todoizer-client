const express = require('express');
const validateJsonWebToken = require('../../../middlewares/validate.jwt');

const ProjectController = require('../controllers/project/project.controllers');
const ProjectTodoController = require('../controllers/project/project_todo.controllers');
const TeamController = require('../controllers/team/team.controllers');

const router = express.Router();

router.use(validateJsonWebToken);

// Project
router.get('/projects/', ProjectController.getAllProjects);
router.get('/projects/:project_id', ProjectController.getProjectById);
router.post('/projects/', ProjectController.createProject);
router.put('/projects/:project_id', ProjectController.editProject);
router.delete('/projects/:project_id', ProjectController.deleteProject);

// Project todos
router.get('/project/:project_id/todo', ProjectTodoController.getAllTodos);
router.get('project/:project_id/todo/:todo_id', ProjectTodoController.getTodoById);
router.post('/project/:project_id/todo', ProjectTodoController.createTodo);
router.put('/project/:project_id/todo/:todo_id', ProjectTodoController.editTodo);
router.delete('/project/:project_id/todo/:todo_id', ProjectTodoController.deleteTodo);

// Team
router.get('/teams/', TeamController.getAllTeams);
router.get('/teams/:team_id', TeamController.getTeamById);
router.post('/teams/', TeamController.createTeam);
router.put('/teams/:team_id', TeamController.editTeam);
router.delete('/teams/:team_id', TeamController.deleteTeam);

module.exports = router;