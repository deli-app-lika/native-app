import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactChild, ReactChildren} from 'react';
import {Button, View} from 'react-native';

import {Account} from '../../screens/Account';
import {Help} from '../../screens/Help';
import {Home} from '../../screens/Home';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {BottomNav} from '../bottom/BottomNav';
import {HomeParamList} from '../types/HomeparamList';

export const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator<HomeParamList>();

interface DrawerNavProps {}

const renderHomeStack = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen name="Home" component={BottomNav} />
  </HomeStack.Navigator>
);

export const DrawerNav: React.FC<DrawerNavProps> = ({}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={renderHomeStack} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};
