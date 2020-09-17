import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

interface RegisterScreenProps {}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Hello RegisterScreen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => NavigationService.navigate('Login')}>
        Login
      </Button>
    </View>
  );
};
