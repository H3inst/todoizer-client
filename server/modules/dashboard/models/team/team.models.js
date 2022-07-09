const Joi = require('joi');
const moment = require('moment');
const { nanoid } = require('nanoid');

const generateId = require('../../../../lib/generateid');
const validateSchema = require('../../../../lib/validate.schema');

const TeamDAO = require('../../dao/team/team.dao');

const TEAM_SCHEMA = Joi.object({
  team_id: Joi.string().max(15).required(),
  user_id: Joi.string().max(15).required(),
  team_name: Joi.string().required(),
  team_code: Joi.string().required(),
  created_at: Joi.date()
});

class TeamModel {
  static async getAllTeams(request_object) {
    const user_id = request_object.user_id;
    let teams = await TeamDAO.getAllTeams(user_id);

    return { teams };
  }

  static async getTeamById(request_object) {
    const { team_id } = request_object.params;
    let team = await TeamDAO.getTeamById(team_id);

    return { team };
  }

  static async createTeam(request_object) {
    const { team_name } = request_object.body;
    const team_id = generateId('T');
    const user_id = request_object.user_id;
    const team_code = nanoid(5);
    const created_at = moment().format();

    const team_data = {
      team_id,
      user_id,
      team_name,
      team_code,
      created_at
    };

    validateSchema(TEAM_SCHEMA, team_data);
    await TeamDAO.createTeam(team_data);

    return { team_id };
  }
}

module.exports = TeamModel;