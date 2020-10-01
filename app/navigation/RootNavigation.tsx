import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {DrawerNav} from './drawer/DrawerNav';
import {navigationRef} from './NavigationService';
import auth from '@react-native-firebase/auth';
import {Alert, Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {addAnonymousUser} from '../services/api/firebase/users';
import {IUser} from '../models/user';
import {setUserData, logout} from '../actions/authActions';
import {formatFirbaseUser} from '../utils/helperMethods';

interface RootNavigatorProps {
  theme: Theme;
}

//const AuthStack = createStackNavigator<AuthParamList>();
let flag = true;
export const RootNavigator: React.FC<RootNavigatorProps> = ({theme}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  //firebaseAuth only used for geting/handling authFirebaseUser since it may be expensive to update user state on every firebaseAuthState update
  const [firebaseAuthUser, setfirebaseAuthUser] = useState<IUser | null>();
  // @ts-ignore
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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

  //  sign out
  const signUserOut = () => {
    flag = false;
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        dispatch(logout(state.location));
      });
  };

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

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
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
      <Button title="Sigin out" onPress={signUserOut} />
    </NavigationContainer>
  );
};

{
  /* <AuthStack.Navigator
          screenOptions={{header: () => null}}
          initialRouteName="Login">
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegisterScreen} />
          <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </AuthStack.Navigator> */
}
