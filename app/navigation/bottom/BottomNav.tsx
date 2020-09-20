import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BaseRouter} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomParmList} from './BottomParmList';
import {Bartender} from '../../screens/Bartender';
import {Search} from '../../screens/Search';
import {Products} from '../../screens/Products';
import {Favorites} from '../../screens/Favorites';

interface BottomNavProps {}

const Tabs = createBottomTabNavigator<BottomParmList>();

export const BottomNav: React.FC<BottomNavProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Bartender') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-list' : 'ios-list';
          } else if (route.name === 'Products') {
            iconName = focused ? 'ios-beer' : 'ios-beer';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'ios-heart' : 'ios-heart';
          }

          // You can return any component that you like here!
          //@ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Bartender" component={Bartender} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Products" component={Products} />
      <Tabs.Screen name="Favorites" component={Favorites} />
    </Tabs.Navigator>
  );
};