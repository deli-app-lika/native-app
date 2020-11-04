import { IUser } from '../models/user';

export const SET_AUTH = 'SET_AUTH';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION';

export const setAuth = () => ({
  type: SET_AUTH
});

export const setUserData = (data: IUser) => ({
  type: UPDATE_USER,
  data
});

export const setUserLocation = (data: {
  long: number | null;
  lad: number | null;
}) => ({
  type: UPDATE_USER_LOCATION,
  data
});

export const logout = (location: {
  long: number | null;
  lad: number | null;
}) => ({
  type: LOG_OUT,
  data: location
});
