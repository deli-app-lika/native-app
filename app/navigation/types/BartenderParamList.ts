import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ICocktail } from '../../models/cocktail';

export type BartenderParamList = {
  Home: undefined;
  Cocktail: ICocktail;
};

export type BartenderStackNavProps<T extends keyof BartenderParamList> = {
  navigation: StackNavigationProp<BartenderParamList, T>;
  route: RouteProp<BartenderParamList, T>;
};
