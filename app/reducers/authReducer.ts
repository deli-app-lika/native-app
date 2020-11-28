import {
  ADD_NEW_ITEM_TO_CART,
  LOG_OUT,
  UPDATE_ITEM_QTY_CART,
  UPDATE_USER,
  UPDATE_USER_LOCATION
} from '../actions/authActions';
import { ICartItem } from '../models/cartItem';
import { IAnonymousUser, IUser } from '../models/user';

const initialState: IAnonymousUser | IUser = {
  isNewUser: true,
  isLoggedIn: false,
  location: { long: null, lat: null },
  cart: []
};

interface IAction {
  data:
    | IUser
    | ICartItem[]
    | {
        cartItem: ICartItem;
        addQty: number;
      };
  type: string;
}

const auth = (state = initialState, action: IAction) => {
  console.log('in reducer cart...');
  console.log('ACTION NOW', action);
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.data
        // isLoggedIn: true,

        // isNewUser: action.data.isNewUser,
        // uid: action.data.uid,
        // isAnonymous: action.data.isAnonymous
      };
    case UPDATE_USER_LOCATION:
      return {
        ...state,
        location: action.data
      };
    case LOG_OUT: {
      return { ...initialState, location: action.data };
    }
    case ADD_NEW_ITEM_TO_CART:
      console.log('in cart reducer', action.data, 'current cart', state.cart);
      return {
        ...state,
        // @ts-ignore
        cart: [...state.cart, ...action.data]
      };
    case UPDATE_ITEM_QTY_CART:
      console.log('update itme quty ');
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (
            // @ts-ignore
            item.invID === action.data.cartItem.invID &&
            // @ts-ignore
            item.itemId === action.data.cartItem.itemId
          ) {
            return {
              ...item,
              // @ts-ignore
              purchaseQuantity: item.purchaseQuantity + action.data.addQty
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
};
export default auth;
