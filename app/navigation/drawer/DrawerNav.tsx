import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Account } from '../../screens/Account';
import { Help } from '../../screens/Help';
import { Home } from '../../screens/Home';

const Drawer = createDrawerNavigator();

interface DrawerNavProps {

}

export const DrawerNav: React.FC<DrawerNavProps> = ({}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}