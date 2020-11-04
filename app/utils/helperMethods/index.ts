import { GeolocationResponse } from '@react-native-community/geolocation';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
// TODO discusss where these should be located
import { IUser } from '../../models/user';

export const formatFirbaseUser = (
  user: FirebaseAuthTypes.UserCredential
): IUser => {
  // TODO
  // @ts-ignore
  return {
    uid: user.user.uid,
    isLoggedIn: true,
    isAnonymous: user.user.isAnonymous,
    isNewUser: true
  };
};

export const formatLocation = (user: IUser, position: GeolocationResponse) => ({
  ...user,
  ...{
    location: {
      long: position.coords.longitude,
      lad: position.coords.latitude
    }
  }
});
