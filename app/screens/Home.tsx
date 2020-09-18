import React from 'react'
import {View, Text, Button} from 'react-native'
import { BottomNav } from '../navigation/bottom/BottomNav';
import { DrawerNavProps } from '../navigation/drawer/DrawerParamsList';

interface HomeProps {

}

export const Home = ({navigation}: DrawerNavProps<'Home'>) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Test home </Text>
                <BottomNav/>
            </View>
);
}