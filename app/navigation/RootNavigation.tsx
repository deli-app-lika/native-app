import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {LoginScreen} from '../screens/auth/login/LoginScreen';
import {ForgotPasswordScreen} from './../screens/auth/forgortPassword/ForgotPasswordScreen';
import {RegisterScreen} from './../screens/auth/register/RegisterScreen';
import {Drawer, DrawerNav} from './drawer/DrawerNav';
import {navigationRef} from './NavigationService';
import {AuthParamList} from './types/AuthParamList';
import {HomeParamList} from './types/HomeparamList';

import auth from '@react-native-firebase/auth';

interface RootNavigatorProps {
  theme: Theme;
}

const HomeStack = createStackNavigator<HomeParamList>();
const AuthStack = createStackNavigator<AuthParamList>();

export const RootNavigator: React.FC<RootNavigatorProps> = ({theme}) => {
  useEffect(() => {
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
  }, []);

  const isLoggedIn = true;
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      {isLoggedIn ? (
        <DrawerNav />
      ) : (
        <AuthStack.Navigator
          screenOptions={{header: () => null}}
          initialRouteName="Login">
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegisterScreen} />
          <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
