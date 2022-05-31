import axios from 'axios';
import { buildUrl, setHeaders } from '../../utils/utils';

/**
 * Get all projects availables
 * @returns 
 */
export async function getAllProjectsService() {
  const absoluteUrl = buildUrl('/dashboard/projects');
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}

export async function createProjectService(payload) {
  const absoluteUrl = buildUrl('/dashboard/projects');
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.post(absoluteUrl, payload, axiosParams);
  return serviceData;
}

export async function deleteProjectService(projectId) {
  const absoluteUrl = buildUrl(`/dashboard/projects/${projectId}`);
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.delete(absoluteUrl, axiosParams);
  return serviceData;
}