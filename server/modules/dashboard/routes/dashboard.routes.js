const express = require('express');
const validateJsonWebToken = require('../../../middlewares/validate.jwt');

const ProjectControllers = require('../controllers/project/project.controllers');
const ProjectTodoControllers = require('../controllers/project/project_todo.controllers');

const router = express.Router();

router.use(validateJsonWebToken);

// Project
router.get('/projects/', ProjectControllers.getAllProjectsController);
router.get('/projects/:project_id', ProjectControllers.getProjectByIdController);
router.post('/projects/', ProjectControllers.createProjectController);
router.put('/projects/:project_id', ProjectControllers.editProjectController);
router.delete('/projects/:project_id', ProjectControllers.deleteProjectController);

// Project todos
router.get('/project/:project_id/todo', ProjectTodoControllers.getAllTodosController);
router.get('project/:project_id/todo/:todo_id', ProjectTodoControllers.getTodoByIdController);
router.post('/project/:project_id/todo', ProjectTodoControllers.createTodoController);
router.put('/project/:project_id/todo/:todo_id', ProjectTodoControllers.editTodoController);
router.delete('/project/:project_id/todo/:todo_id', ProjectTodoControllers.deleteTodoController);

module.exports = router;