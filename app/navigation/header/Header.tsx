import * as React from 'react';

import { Colors, IconButton, Text } from 'react-native-paper';

import { View } from 'react-native';

interface HeaderProps {
  navigation: any;
}

const LikaHeader: React.FC<HeaderProps> = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const onCartCLicked = () => console.log('Cart Clicked');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.grey300,
        height: 70
      }}
    >
      <IconButton
        icon="menu"
        color={Colors.orange800}
        size={40}
        onPress={openDrawer}
      />
      <Text
        style={{ fontWeight: 'bold', fontSize: 30, color: Colors.orange800 }}
      >
        LIKA
      </Text>
      <IconButton
        icon="cart"
        color={Colors.orange800}
        size={40}
        onPress={onCartCLicked}
      />
    </View>
  );
};

export default LikaHeader;
