import {IUser} from '../models/user';

export const SET_AUTH = 'SET_AUTH';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_USER = 'UPDATE_USER';

export const setAuth = () => ({
  type: SET_AUTH,
});

export const setUserData = (data: IUser) => {
  console.log('in set user action');
  return {type: UPDATE_USER, data};
};

export const logout = () => ({
  type: LOG_OUT,
});
