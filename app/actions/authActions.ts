import { ICartItem } from '../models/cartItem';
import { IUser } from '../models/user';

export const SET_AUTH = 'SET_AUTH';
export const LOG_OUT = 'LOG_OUT';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION';
export const ADD_NEW_ITEM_TO_CART = 'ADD_NEW_ITEM_TO_CART';
export const UPDATE_ITEM_QTY_CART = 'UPDATE_ITEM_QTY_CART';

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

// cart actions
export const addNewItemToCart = (data: ICartItem[]) => ({
  type: ADD_NEW_ITEM_TO_CART,
  data
});

export const updateItemQtyCart = (data: {
  cartItem: ICartItem;
  addQty: number;
}) => {
  console.log('in action update cart item');
  return {
    type: UPDATE_ITEM_QTY_CART,
    data
  };
};
