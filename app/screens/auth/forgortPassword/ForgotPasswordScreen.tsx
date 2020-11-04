import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

interface ForgotPasswordScreenProps {}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => NavigationService.navigate('Login')}
      >
        Login
      </Button>
    </View>
  );
};
export default ForgotPasswordScreen;
