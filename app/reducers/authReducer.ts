import {
  LOG_OUT,
  UPDATE_USER,
  UPDATE_USER_LOCATION
} from '../actions/authActions';
import { IAnonymousUser, IUser } from '../models/user';

const initialState: IAnonymousUser | IUser = {
  isNewUser: true,
  isLoggedIn: false,
  location: { long: null, lat: null }
};

interface IAction {
  data: IUser;
  type: string;
}

const auth = (state = initialState, action: IAction) => {
  console.log('ACTION NOW', action);
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        isLoggedIn: true,
        isNewUser: action.data.isNewUser,
        uid: action.data.uid,
        isAnonymous: action.data.isAnonymous
      };
    case UPDATE_USER_LOCATION:
      return {
        ...state,
        location: action.data
      };
    case LOG_OUT: {
      return { ...initialState, location: action.data };
    }
    default:
      return state;
  }
};
export default auth;
