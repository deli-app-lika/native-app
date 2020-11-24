import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ProductsParamList = {
  Products: undefined;
  Item: undefined;
  Cart: undefined;
};

export type ProductsStackNavProps<T extends keyof ProductsParamList> = {
  navigation: StackNavigationProp<ProductsParamList, T>;
  route: RouteProp<ProductsParamList, T>;
};
