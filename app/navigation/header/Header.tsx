import * as React from 'react';
import { View } from 'react-native';
import { Colors, IconButton, Text } from 'react-native-paper';
import NavigationService from '../NavigationService';
import styles from './styles';

interface HeaderProps {
  navigation: any;
}

const LikaHeader: React.FC<HeaderProps> = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const onCartCLicked = () => {
    console.log('Cart Clicked');
    NavigationService.navigate('Cart');
  };

  return (
    <View style={styles.Container}>
      <IconButton
        icon="menu"
        color={Colors.orange800}
        size={40}
        onPress={openDrawer}
      />
      <Text style={styles.HeaderText}>LIKA</Text>
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
