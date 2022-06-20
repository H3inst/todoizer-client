import { toast } from 'react-toastify';
import { RESPONSE_STATUS } from '../../constants/constants';
import * as interfaceActions from '../interface/interfaceActions';
import * as teamServices from '../../services/dashboard/team/team';
import { getAllTeams } from './teamSlice';

export function getAllTeamsAction() {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await teamServices.getAllTeamsService();
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllTeams(response.data.teams));
      return true;

    } catch (error) {
      console.log(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function createTeamAction(team) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await teamServices.createTeamService(team);
      if (response.status !== RESPONSE_STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllTeamsAction());
      return response.data;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}