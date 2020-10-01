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
      <Text
        key={cat}
        onPress={() => pressCategoryHandler(cat)}
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          borderColor: 'pink',
          borderWidth: 2,
        }}>
        {cat}
      </Text>
    );
  });
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        paddingStart: 5,
        paddingEnd: 5,
      }}>
      {categoriesToShow}
    </ScrollView>
  );
}

export const Bartender: React.FC<BartenderProps> = ({}) => {
  const pressCategoryHandler = (category: any) => {
    console.log(category);
  };
  const rum = 'rum';
  return (
    <View style={{height: 100}}>
      <View style={{flex: 3, borderColor: 'green', backgroundColor: 'green'}}>
        <CategoryTabs pressCategoryHandler={pressCategoryHandler} />
        {/* <Text
            onPress={() => pressCategoryHandler(rum)}
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              borderColor: 'pink',
              borderWidth: 2,
            }}>
            rum
          </Text> */}
      </View>
    </View>
  );
};

{
  /* <ScrollView>
<MyTabs />
</ScrollView> */
}
