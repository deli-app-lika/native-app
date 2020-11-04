import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// use this in the createStack navigator () to make sure that the name of the screen is type safe
//
export type DrawerParamList = {
  Home: undefined;
  Account: undefined;
  Help: undefined;
};

// create this for each stack that is created
export type DrawerNavProps<T extends keyof DrawerParamList> = {
  navigation: DrawerNavigationProp<DrawerParamList, T>;
  route: RouteProp<DrawerParamList, T>;
};
