import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { IUser } from '../../models/user';

const usersRef = firestore().collection('Users');

const loginWithEmailAndPassword = async (
  email: string,
  password: string,
  anonymousCreds: IUser
) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    if (user) {
      try {
        const loggedInUser = await (
          await usersRef.doc(user.user?.uid).get()
        ).data();
        const toUpdateUserRecords = {
          ...anonymousCreds,
          ...loggedInUser
        };
        try {
          await usersRef.doc(loggedInUser?.uid).set(toUpdateUserRecords);
          const userDetails = await (
            await usersRef.doc(loggedInUser?.uid).get()
          ).data();
          console.log('userDetails', userDetails);
          return userDetails as IUser;
        } catch (e) {
          // TODO: Delete user from auth
          console.log('error creating user', e);
          throw new Error(e);
        }
      } catch (e) {
        // TODO:Log the User out
        return 'Unable to retrieve user details';
      }
    } else {
      return 'User required';
    }
  } catch (e) {
    throw new Error(e);
  }
};

const createAccountWithEmailAndPassword = async (
  email: string,
  password: string,
  anonymousCreds: IUser
) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    const timestamp = firestore.Timestamp.fromDate(new Date());
    const uid = user.user?.uid;
    const data = {
      ...anonymousCreds,
      uid: user.user?.uid,
      anonymousId: anonymousCreds.uid,
      isNewUser: user.additionalUserInfo?.isNewUser,
      email: user.user?.email,
      isAnonymous: false,
      providerId: user.additionalUserInfo?.providerId,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    try {
      await usersRef.doc(uid).set(data);
      const createdUser = await (await usersRef.doc(uid).get()).data();
      console.log('createdUser', createdUser);
      return createdUser as IUser;
    } catch (e) {
      // TODO: Delete user from auth
      console.log('error creating user', e);
      throw new Error(e);
    }
  } catch (e) {
    // TODO: Delete user from auth
    console.log('e', e);
    throw new Error(e);
  }
};

const authManager = {
  loginWithEmailAndPassword,
  createAccountWithEmailAndPassword
  // loginOrSignUpWithFacebook,
};

export default authManager;
