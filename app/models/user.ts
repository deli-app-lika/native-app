import { ICartItem } from './cartItem';
import { ILocation } from './location';

export interface IUser {
  isLoggedIn: boolean;
  isNewUser: boolean;
  uid: string;
  anonymousId?: string;
  isAnonymous: boolean;
  providerId?: string;
  email?: string;
  emailVerified?: string;
  fullName?: string;
  phoneNumber?: string;
  deliveryAddress?: any;
  location: {
    long: number | null;
    lat: number | null;
  };
  cart: ICartItem[];
}

export interface IAnonymousUser {
  isNewUser: true;
  isLoggedIn: false;
  location: ILocation;
  cart: ICartItem[];
}
// everything except provider data and provider id.
// const FireBase user auth example = {
//   uid: 'YNtC34lIi7dvD8C1GK3to0pIuMc2',
//   metadata: {creationTime: 1601443097071, lastSignInTime: 1601443097071},
//   providerId: 'firebase',
//   photoURL: null,
//   emailVerified: false,
//   providerData: [],
//   email: null,
//   isAnonymous: true,
//   displayName: null,
//   phoneNumber: null,
// };
