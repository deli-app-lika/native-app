import { ICartItem } from '../models/cartItem';
import { IUser } from '../models/user';

export const SET_AUTH = 'SET_AUTH';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION';
export const ADD_TO_CART = 'ADD_TO_CART';

export const setAuth = () => ({
  type: SET_AUTH
});

export const setUserData = (data: IUser) => ({
  type: UPDATE_USER,
  data
});

export const setUserLocation = (data: {
  long: number | null;
  lat: number | null;
}) => ({
  type: UPDATE_USER_LOCATION,
  data
});

export const logout = (location: {
  long: number | null;
  lat: number | null;
}) => ({
  type: LOG_OUT,
  data: location
});

export const addToCart = (data: ICartItem[]) => ({
  type: ADD_TO_CART,
  data
});
