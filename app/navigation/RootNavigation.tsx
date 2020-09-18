import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen} from '../screens/auth/login/LoginScreen';
import {ForgotPasswordScreen} from './../screens/auth/forgortPassword/ForgotPasswordScreen';
import {RegisterScreen} from './../screens/auth/register/RegisterScreen';
import {HomeScreen} from './../screens/Home/HomeScreen';
import {Drawer, DrawerNav} from './drawer/DrawerNav';
import {navigationRef} from './NavigationService';
import {AuthParamList} from './types/AuthParamList';
import {HomeParamList} from './types/HomeparamList';

interface RootNavigatorProps {
  theme: Theme;
}

const HomeStack = createStackNavigator<HomeParamList>();
const AuthStack = createStackNavigator<AuthParamList>();

export const RootNavigator: React.FC<RootNavigatorProps> = ({theme}) => {
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
