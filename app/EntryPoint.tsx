import React from 'react'
import {View, Text, ActivityIndicator, SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native'
import { Header, ReloadInstructions, DebugInstructions, LearnMoreLinks, Colors } from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react';

import {store, persistor} from './store/configureStore';

interface EntryPointProps {

}

export const EntryPoint: React.FC<EntryPointProps> = ({}) => {
        return (
            <Provider store={store} >
               <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                   
               <>
                    <StatusBar barStyle="dark-content" />
                    <SafeAreaView>
                        <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header />
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Step One</Text>
                            <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                                screen and then come back to see your edits.
                            </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>See Your Changes</Text>
                            <Text style={styles.sectionDescription}>
                                <ReloadInstructions />
                            </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Debug</Text>
                            <Text style={styles.sectionDescription}>
                                <DebugInstructions />
                            </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Learn More</Text>
                            <Text style={styles.sectionDescription}>
                                Read the docs to discover what to do next:
                            </Text>
                            </View>
                            <LearnMoreLinks />
                        </View>
                        </ScrollView>
                    </SafeAreaView>
                    </>

               </PersistGate>
            </Provider>
);
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  