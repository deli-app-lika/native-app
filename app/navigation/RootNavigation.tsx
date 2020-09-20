import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {LoginScreen} from '../screens/auth/login/LoginScreen';
import {ForgotPasswordScreen} from './../screens/auth/forgortPassword/ForgotPasswordScreen';
import {RegisterScreen} from './../screens/auth/register/RegisterScreen';
import {DrawerNav} from './drawer/DrawerNav';
import {navigationRef} from './NavigationService';
import {AuthParamList} from './types/AuthParamList';
import {HomeParamList} from './types/HomeparamList';

import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';

interface RootNavigatorProps {
  theme: Theme;
}

const AuthStack = createStackNavigator<AuthParamList>();

export const RootNavigator: React.FC<RootNavigatorProps> = ({theme}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  //  sign out
  const signUserOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  // set ananymous auth
  const anonymousSignIn = () => {
    console.log('test anaymousignin');
    auth()
      .signInAnonymously()
      .then(() => {
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
    console.log('inticalizing');
    return null;
  }

  if (!user) {
    console.log('user not signed in');
    anonymousSignIn();
  }
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <DrawerNav />
      {console.log(user)}
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
