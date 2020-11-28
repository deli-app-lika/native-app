import * as authReducer from './authReducer';
import * as cartReducer from './cartReduer';
import * as drinkReducer from './drinkReducer';

export default Object.assign(drinkReducer, authReducer, cartReducer);
