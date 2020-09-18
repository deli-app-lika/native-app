import React from 'react'
import {View, Text, Button} from 'react-native'
import { DrawerNavProps } from '../navigation/drawer/DrawerParamsList';

interface HelpProps {

}

export const Help = ({navigation}: DrawerNavProps<'Help'>) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back Account" />
          </View>
);
}