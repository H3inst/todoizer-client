import { toast } from 'react-toastify';
import { STATUS } from '../../constants/constants';
import * as projectServices from '../../services/dashboard/project';
import * as interfaceActions from '../interface/interfaceActions';
import { getAllProjects, getProject } from './projectSlice';

export function getAllProjectsAction() {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.getAllProjectsService();
      if (response.status !== STATUS.success) {
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

export function getProjectByIdAction(projectId) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.getProjectByIdService(projectId);
      if (response.status !== STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getProject(response.data));
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function createProjectAction(project) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.createProjectService(project);
      if (response.status !== STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllProjectsAction());
      return response.data;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function editProjectAction(projectId, payload) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.editProjectService(projectId, payload);
      if (response.status !== STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getProjectByIdAction(projectId));
      dispatch(getAllProjectsAction());
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function deleteProjectAction(projectId) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      const response = await projectServices.deleteProjectService(projectId);
      if (response.status !== STATUS.success) {
        toast.error(response.error);
        return false;
      }
      dispatch(getAllProjectsAction());
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}