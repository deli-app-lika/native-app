import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Hello LoginScreen</Text>
      <Button
        icon="login"
        mode="contained"
        onPress={() => NavigationService.navigate('Register')}
      >
        Register
      </Button>
      <Button
        icon="login"
        mode="contained"
        onPress={() => NavigationService.navigate('ForgotPassword')}
      >
        Forgort Password
      </Button>
    </View>
  );
};

export default LoginScreen;
