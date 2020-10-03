import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Card} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
//import ScrollableTabView from 'react-native-scrollable-tab-view';
const TopTab = createMaterialTopTabNavigator();

interface BartenderProps {}

function CategoryTabs({pressCategoryHandler}: any) {
  //TODO get categories from algolia
  const categories = [
    'rum',
    'tequila',
    'wine',
    'acohol1',
    'acohol2',
    'acohol3',
    'acohol4',
    'acohol5',
    'acohol6',
    'acohol7',
    'acoho8',
  ];
  const categoriesToShow = categories.map((cat) => {
    return (
      <View tabLabel={cat} key={cat} onPress={pressCategoryHandler}>
        <CategoryScreen category={cat} />
      </View>
    );
  });
  return (
    <ScrollableTabView
      style={{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
      }}
      initialPage={0}
      tabBarInactiveTextColor="green"
      tabBarUnderlineStyle={{}}
      renderTabBar={() => <ScrollableTabBar style={{borderWidth: 0}} />}>
      {categoriesToShow}
    </ScrollableTabView>
  );
}
const BartenderStack = createStackNavigator<any>();

export const Bartender: React.FC<BartenderProps> = ({}) => {
  return (
    <BartenderStack.Navigator initialRouteName="Home">
      <BartenderStack.Screen name="Home" component={Category} />
    </BartenderStack.Navigator>
  );
};

const Category = () => {
  const pressCategoryHandler = (category: any) => {
    console.log('test');
  };
  return (
    // <View style={{height: 100}}>
    //   <View style={{flex: 3, borderColor: 'green', backgroundColor: 'green'}}>
    <CategoryTabs pressCategoryHandler={pressCategoryHandler} />
    //   </View>
    // // </View>
  );
};

const CategoryScreen = (props: any) => {
  return <Text>test cate {props.category}</Text>;
};
