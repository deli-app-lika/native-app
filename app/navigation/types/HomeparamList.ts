import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type HomeParamList = {
  Welcome: undefined;
  Home: undefined;
  Payments: undefined;
  InputPayment: undefined;
  Account: undefined;
  Login: undefined;
  Register: undefined;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
