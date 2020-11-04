import React from 'react';
import { Button, View } from 'react-native';
import { DrawerNavProps } from '../navigation/drawer/DrawerParamsList';

// interface HelpProps {}

const Help = ({ navigation }: DrawerNavProps<'Help'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back Account" />
    </View>
  );
};
export default Help;
