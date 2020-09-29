import {LOG_OUT, UPDATE_USER} from '../actions/auth';
import {IUser} from '../models/user';

const initialState = {
  isNewUser: true,
  isLoggedIn: false,
};

interface IAction {
  data: IUser;
  type: string;
}

export const auth = (state = initialState, action: IAction) => {
  console.log('ACTION NOW', action);
  switch (action.type) {
    case UPDATE_USER:
      console.log('in update user reducer');
      return {
        isLoggedIn: true,
        isNewUser: action.data.isNewUser,
        uid: action.data.uid,
        isAnonymous: action.data.isAnonymous,
        location: action.data.location,
      };
    case LOG_OUT: {
      return initialState;
    }
    default:
      return state;
  }
};
