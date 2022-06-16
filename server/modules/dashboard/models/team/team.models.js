const Joi = require('joi');
const moment = require('moment');
const { nanoid } = require('nanoid');

const generateId = require('../../../../lib/generateid');
const validateSchema = require('../../../../lib/validate.schema');

const TeamDao = require('../../dao/team/team.dao');

const TEAM_SCHEMA = Joi.object({
  team_id: Joi.string().max(15).required(),
  user_id: Joi.string().max(15).required(),
  team_name: Joi.string().required(),
  team_code: Joi.string().required(),
  created_at: Joi.date()
});

async function createTeamModel(request_object) {
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
  await TeamDao.createTeamDao(team_data);

  return { team_id };
}

module.exports = {
  createTeamModel
};