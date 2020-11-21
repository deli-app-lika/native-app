import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

// TODO set up props
interface ItemProps {}
// @ts-ignore
const Item: React.FC<ItemProps> = ({ route }) => {
  const item = route.params;
  return (
    <View>
      <Text>{item.itemName}</Text>
    </View>
  );
};

export default Item;
