const Joi = require('joi');
const moment = require('moment');
const generateId = require('../../../../lib/generateid');

const validateSchema = require('../../../../lib/validate.schema');
const ProjectDAO = require('../../dao/project/project.dao');

const PROJECT_SCHEMA = Joi.object({
  project_id: Joi.string().max(15).required(),
  user_id: Joi.string().max(15).required(),
  project_name: Joi.string().required(),
  created_at: Joi.date()
});

class ProjectModel {
  static async getAllProjects(request_object) {
    const user_id = request_object.user_id;
    const projects = await ProjectDAO.getAllProjects(user_id);

    return { projects };
  }

  static async getProjectById(request_object) {
    const { project_id } = request_object.params;
    const project = await ProjectDAO.getProjectById(project_id);

    return project[0] || {};
  }

  static async createProject(request_object) {
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

    validateSchema(PROJECT_SCHEMA, project_data);
    await ProjectDAO.createProject(project_data);

    return { project_id };
  }

  static async editProject(request_object) {
    const { project_id } = request_object.params;
    const { project_name } = request_object.body;
    const user_id = request_object.user_id;

    const project_data = {
      project_id,
      project_name,
      user_id
    };

    validateSchema(PROJECT_SCHEMA, project_data);
    await ProjectDAO.editProject(project_data);

    return {};
  }

  static async deleteProject(request_object) {
    const { project_id } = request_object.params;
    await ProjectDAO.deleteProject(project_id);

    return {};
  }
}

module.exports = ProjectModel;