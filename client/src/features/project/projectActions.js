import { toast } from 'react-toastify';
import { STATUS } from '../../constants/constants';
import * as projectServices from '../../services/dashboard/project';
import * as interfaceActions from '../interface/interfaceActions';
import { getAllProjects } from './projectSlice';

export function getAllProjectsAction() {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.getAllProjectsService();
      if (response.status !== STATUS.ok) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllProjects(response.data.projects));
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}