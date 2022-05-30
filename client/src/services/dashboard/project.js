import axios from 'axios';
import { buildUrl, setHeaders } from '../../utils/utils';

export async function getAllProjectsService() {
  const absoluteUrl = buildUrl('/dashboard/projects');
  const headers = setHeaders();
  const axiosParams = {
    headers
  };

  const { data: serviceData } = await axios.get(absoluteUrl, axiosParams);
  return serviceData;
}