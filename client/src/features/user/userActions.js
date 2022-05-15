import { toast } from 'react-toastify';

import { STATUS } from '../../constants/constants';
import * as AccessServices from '../../services/access';
import * as interfaceActions from '../interface/interfaceActions';
import { login } from './userSlice';

export function registerUserAction(user) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      if (user.user_password !== user.confirm_password) {
        toast.error('Password do not match.');
        return false;
      }
      delete user.confirm_password;

      const response = await AccessServices.registerUserService(user);
      if (response.status !== STATUS.ok) {
        toast.error(response.error);
        return false;
      }
      toast.success('Account create successfully, please login.');
      return true;

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function loginUserAction(user) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());
      const response = await AccessServices.loginUserService(user);

      if (response.status !== STATUS.ok) {
        toast.error(response.error);
        return false;
      }
      localStorage.setItem('x_token', response.data.token);
      dispatch(login(response.data.user));

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}

export function verifyAuthAction() {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());
      const response = await AccessServices.checkTokenService();

      if (response.status !== STATUS.ok) {
        toast.error(response.error);
        localStorage.removeItem('x_token');
        return false;
      }
      dispatch(login(response.data));

    } catch (error) {

    } finally {
      dispatch(interfaceActions.finishLoadingAction());
    }
  };
}