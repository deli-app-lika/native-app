/* eslint-disable @typescript-eslint/no-throw-literal */
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
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

// eslint-disable-next-line consistent-return
const continueWithGoogle = async (anonymousCreds: IUser) => {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userSignedIn = await auth().signInWithCredential(googleCredential);
    const uid = userSignedIn.user?.uid;
    const timestamp = firestore.Timestamp.fromDate(new Date());
    const loggedInUser = await (await usersRef.doc(uid).get()).data();
    const userRecordsPresent = !!loggedInUser;
    const data = {
      ...anonymousCreds,
      uid,
      anonymousId: anonymousCreds.uid,
      isNewUser: userSignedIn.additionalUserInfo?.isNewUser,
      email: userSignedIn.user?.email,
      emailVerified: userSignedIn.user?.emailVerified,
      isAnonymous: false,
      providerId: userSignedIn.additionalUserInfo?.providerId,
      fullName: userSignedIn.user?.displayName,
      phoneNumber: userSignedIn.user?.phoneNumber,
      createdAt: timestamp,
      updatedAt: timestamp
    };
    if (userSignedIn.additionalUserInfo?.isNewUser && !userRecordsPresent) {
      try {
        await usersRef.doc(uid).set(data);
        const createdUser = await (await usersRef.doc(uid).get()).data();
        return createdUser as IUser;
      } catch (e) {
        // TODO: Delete user from auth
        console.log('error creating user', e);
        throw new Error(e);
      }
    } else {
      const toUpdateUserRecords = {
        ...anonymousCreds,
        ...loggedInUser
      };
      try {
        await usersRef.doc(loggedInUser?.uid).set(toUpdateUserRecords);
        const userDetails = await (
          await usersRef.doc(loggedInUser?.uid).get()
        ).data();
        return userDetails as IUser;
      } catch (e) {
        // TODO: Delete user from auth
        console.log('error creating user', e);
        throw new Error(e);
      }
    }
  } catch (error) {
    console.log('error google', error);
  }
};

// eslint-disable-next-line consistent-return
const continueWithFacebook = async (anonymousCreds: IUser) => {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email'
    ]);
    if (result.isCancelled) {
      console.log('cancelled fb');
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    try {
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        console.log('Something went wrong on token get');
        throw 'Something went wrong obtaining access token';
      }
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken
      );
      const userSignedIn = await auth().signInWithCredential(
        facebookCredential
      );
      const uid = userSignedIn.user?.uid;
      const timestamp = firestore.Timestamp.fromDate(new Date());
      const loggedInUser = await (await usersRef.doc(uid).get()).data();
      const userRecordsPresent = !!loggedInUser;
      const dataToSave = {
        ...anonymousCreds,
        uid,
        anonymousId: anonymousCreds.uid,
        isNewUser: userSignedIn.additionalUserInfo?.isNewUser,
        email: userSignedIn.user?.email,
        emailVerified: userSignedIn.user?.emailVerified,
        isAnonymous: false,
        providerId: userSignedIn.additionalUserInfo?.providerId,
        fullName: userSignedIn.user?.displayName,
        phoneNumber: userSignedIn.user?.phoneNumber,
        createdAt: timestamp,
        updatedAt: timestamp
      };
      if (userSignedIn.additionalUserInfo?.isNewUser && !userRecordsPresent) {
        try {
          await usersRef.doc(uid).set(dataToSave);
          const createdUser = await (await usersRef.doc(uid).get()).data();
          return createdUser as IUser;
        } catch (e) {
          // TODO: Delete user from auth
          console.log('error creating user', e);
          throw new Error(e);
        }
      } else {
        const toUpdateUserRecords = {
          ...anonymousCreds,
          ...loggedInUser
        };
        try {
          await usersRef.doc(loggedInUser?.uid).set(toUpdateUserRecords);
          const userDetails = await (
            await usersRef.doc(loggedInUser?.uid).get()
          ).data();
          return userDetails as IUser;
        } catch (e) {
          // TODO: Delete user from auth
          console.log('error creating user', e);
          throw new Error(e);
        }
      }
    } catch (e) {
      console.log('e getting token', e);
    }
  } catch (e) {
    console.log('error fb', e);
  }
};

const authManager = {
  loginWithEmailAndPassword,
  createAccountWithEmailAndPassword,
  continueWithGoogle,
  continueWithFacebook
  //   signOut
  // loginOrSignUpWithFacebook,
};

export default authManager;
