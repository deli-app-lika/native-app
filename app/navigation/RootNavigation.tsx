import auth from '@react-native-firebase/auth';
import { NavigationContainer, Theme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../actions/authActions';
import { IUser } from '../models/user';
import addAnonymousUser from '../services/api/firebase/users';
import { formatFirbaseUser } from '../utils/helperMethods';
import { DrawerNav } from './drawer/DrawerNav';
import { navigationRef } from './NavigationService';

interface RootNavigatorProps {
  theme: Theme;
}

// const AuthStack = createStackNavigator<AuthParamList>();
let flag = true;
const RootNavigator: React.FC<RootNavigatorProps> = ({ theme }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // firebaseAuth only used for geting/handling authFirebaseUser since it may be expensive to update user state on every firebaseAuthState update
  const [firebaseAuthUser, setfirebaseAuthUser] = useState<IUser | null>();
  // @ts-ignore
  const dispatch = useDispatch();

  // set ananymous auth
  const anonymousSignIn = () => {
    auth()
      .signInAnonymously()
      .then((user) => {
        const newUser = formatFirbaseUser(user);
        addAnonymousUser(newUser);
        dispatch(setUserData(newUser));
        console.log('User signed in anonymously');
      })
      .catch((error) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }
        console.error(error);
      });
  };

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    if (flag) {
      console.log('go - called auth state change');
      setfirebaseAuthUser(user);
      if (initializing) setInitializing(false);
    } else {
      console.log('no - called auth state change');
      flag = true;
      setfirebaseAuthUser(null);
      anonymousSignIn();
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    console.log('initializing');
    return null;
  }
  if (!firebaseAuthUser) {
    console.log('user not signed in');
    anonymousSignIn();
  }
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <DrawerNav />
      {/* button just to test ananymous sigin in after log out */}
      {/* <Button title="Sigin out" onPress={signUserOut} /> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
