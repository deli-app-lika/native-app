import React from 'react';
import { Text, View } from 'react-native';
import BottomNav from '../navigation/bottom/BottomNav';
import { DrawerNavProps } from '../navigation/drawer/DrawerParamsList';

// interface HomeProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = ({ navigation }: DrawerNavProps<'Home'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test home </Text>
      <BottomNav />
    </View>
  );
};

export default Home;
