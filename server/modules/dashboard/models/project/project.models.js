const Joi = require('joi');
const moment = require('moment');
const generateId = require('../../../../lib/generateid');

const validateSchema = require('../../../../lib/validate.schema');
const ProjectDao = require('../../dao/project/project.dao');

const PROJECt_SCHEMA = Joi.object({
  project_id: Joi.string().max(15).required(),
  user_id: Joi.string().max(15).required(),
  project_name: Joi.string().required(),
  created_at: Joi.date()
});

async function getAllProjectsModel(request_object) {
  const user_id = request_object.user_id;
  const projects = await ProjectDao.getAllProjectsDao(user_id);

  return { projects };
}

async function getProjectByIdModel(request_object) {
  const { project_id } = request_object.params;
  const project = await ProjectDao.getProjectById(project_id);

  return project[0] || {};
}

async function createProjectModel(request_object) {
  const { project_name } = request_object.body;
  const user_id = request_object.user_id;
  const project_id = generateId('P');
  const created_at = moment().format();

  const project_data = {
    project_id,
    user_id,
    project_name,
    created_at
  };

  validateSchema(PROJECt_SCHEMA, project_data);
  await ProjectDao.createProjectDao(project_data);

  return { project_id };
}

async function editProjectModel(request_object) {
  const { project_id } = request_object.params;
  const { project_name } = request_object.body;
  const user_id = request_object.user_id;

  const project_data = {
    project_id,
    project_name,
    user_id
  };

  validateSchema(PROJECt_SCHEMA, project_data);
  await ProjectDao.editProjectDao(project_data);

  return {};
}

async function deleteProjectModel(request_object) {
  const { project_id } = request_object.params;
  await ProjectDao.deleteProjectDao(project_id);

  return {};
}

module.exports = {
  getAllProjectsModel,
  getProjectByIdModel,
  createProjectModel,
  editProjectModel,
  deleteProjectModel
};