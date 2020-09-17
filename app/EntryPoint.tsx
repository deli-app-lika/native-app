import React from 'react'
import {View, Text, ActivityIndicator, SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native'
import { Header, ReloadInstructions, DebugInstructions, LearnMoreLinks, Colors } from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './store/configureStore';

import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import { BottomNav } from './navigation/bottom/BottomNav';
import { DrawerNav } from './navigation/drawer/DrawerNav';



interface EntryPointProps {

}

export const EntryPoint: React.FC<EntryPointProps> = ({}) => {
  return (
      <Provider store={store} >
          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <NavigationContainer>
            {/* <DrawerNav/> */}
            <BottomNav/>
          </NavigationContainer>
          </PersistGate>
      </Provider>
);
}