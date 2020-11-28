import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {};

interface IAction {
  data: any;
  type: string;
}

const auth = (state = initialState, action: IAction) => {
  console.log('ACTION NOW', action);
  switch (action.type) {
    case ADD_TO_CART:
      console.log('in cart reducer', action.data);
      return {
        ...state,
        ...action.data
      };

    default:
      return state;
  }
};
export default auth;
