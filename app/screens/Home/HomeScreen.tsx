import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from './styles';

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Hello HomeScreen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
};
