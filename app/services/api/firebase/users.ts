import firestore from '@react-native-firebase/firestore';

import {IUser} from '../../../models/user';

// Add anonymous user to the user table in firestore
export const addAnonymousUser = (user: IUser) => {
  firestore().collection('Users').doc(user.uid).set(user);
};
