export interface IUser {
  isLoggedIn: boolean;
  isNewUser: boolean;
  uid: string;
  isAnonymous: boolean;
  location: {
    long: number;
    lad: number;
  };
}
//everything except provider data and provider id.
