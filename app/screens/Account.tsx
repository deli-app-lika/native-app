import React from 'react'
import {View, Text, Button} from 'react-native'
import { DrawerNavProps } from '../navigation/drawer/DrawerParamsList';

interface AccountProps {

}

export const Account = ({navigation}: DrawerNavProps<'Account'>) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              onPress={() => navigation.navigate('Help')}
              title="Go to Help"
            />
          </View>
);
}