import { toast } from 'react-toastify';

import { STATUS } from "../../constants/constants";
import { registerUserService } from "../../services/access";
import * as interfaceActions from "../interface/interfaceActions";

export function registerUserAction(user) {
  return async function (dispatch) {
    try {
      dispatch(interfaceActions.startLoadingAction());

      if (user.user_password !== user.confirm_password) {
        toast.error('Password do not match.');
        return false;
      }
      delete user.confirm_password;

      const response = await registerUserService(user);
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
  }
}