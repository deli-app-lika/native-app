import React, { useEffect } from 'react';

import { PermissionsAndroid, Platform, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Geolocation, {
  GeolocationError,
  GeolocationResponse
} from '@react-native-community/geolocation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigationState } from '@react-navigation/native';
import {
  createStackNavigator,
  StackHeaderProps
} from '@react-navigation/stack';

import { Colors, IconButton, Text } from 'react-native-paper';
import { setUserLocation } from '../../actions/authActions';
import Account from '../../screens/Account';
import Help from '../../screens/Help';
import addAnonymousUser from '../../services/api/firebase/users';
import { getLocationPermission } from '../../services/api/permissions/location';
import { formatLocation } from '../../utils/helperMethods';
import BottomNav from '../bottom/BottomNav';
import LikaHeader from '../header/Header';
import { HomeParamList } from '../types/HomeparamList';
import LikaDrawer from './LikaDrawer';
import Payments from '../../screens/Payments/Payments';
import styles from './style';
import NewCardEntry from '../../screens/Payments/NewCardEntry';

export const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator<HomeParamList>();

interface DrawerNavProps {}

const RenderHomeStack = () => {
  // @ts-ignore
  const state = useSelector((innerState) => innerState.auth);
  const dispatch = useDispatch();
  const navigationState = useNavigationState((navState) => navState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getLocation = async () => {
    try {
      if (Platform.OS === 'android') {
        // Calling the permission function
        getLocationPermission().then((granted) => {
          // TODO move code back into location.ts and await her
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('granted location permission');
            Geolocation.getCurrentPosition(
              (position: GeolocationResponse) => {
                if (state.isLoggedIn) {
                  const updatedUser = formatLocation(state, position);
                  addAnonymousUser(updatedUser);
                  dispatch(setUserLocation(updatedUser.location));
                }
              },
              (error: GeolocationError) =>
                console.log('Error', JSON.stringify(error)),
              {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000
              }
            );
          } else {
            console.log('denied location permission');
          }
        });
      } else {
        // TODO IOS code
        // getOneTimeLocation();
        // subscribeLocationLocation();
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: (props: StackHeaderProps) => {
          const { routes, index } = navigationState;
          const {
            route: { name: routeName }
            // eslint-disable-next-line react/destructuring-assignment
          } = props.scene;
          if (routes[index].name !== routeName) {
            return null;
          }
          // eslint-disable-next-line react/destructuring-assignment
          return <LikaHeader navigation={props.navigation} />;
        }
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={BottomNav} />
      <HomeStack.Screen
        name="Payments"
        component={Payments}
        options={({ navigation }) => ({
          header: () => {
            return (
              <View style={styles.Header}>
                <View style={styles.BackArrow}>
                  <IconButton
                    icon="keyboard-backspace"
                    color={Colors.black}
                    size={40}
                    onPress={() => {
                      // @ts-ignore
                      navigation.goBack();
                    }}
                  />
                </View>
                <View style={styles.HeaderBody}>
                  <Text style={styles.HeaderTitle}>LIKA</Text>
                </View>
              </View>
            );
          }
        })}
      />
      <HomeStack.Screen
        name="InputPayment"
        component={NewCardEntry}
        options={({ navigation }) => ({
          header: () => {
            return (
              <View style={styles.Header}>
                <View style={styles.BackArrow}>
                  <IconButton
                    icon="keyboard-backspace"
                    color={Colors.black}
                    size={40}
                    onPress={() => {
                      // @ts-ignore
                      navigation.goBack();
                    }}
                  />
                </View>
                <View style={styles.HeaderBody}>
                  <Text style={styles.HeaderTitle}>Input Card</Text>
                </View>
              </View>
            );
          }
        })}
      />
    </HomeStack.Navigator>
  );
};

export const DrawerNav: React.FC<DrawerNavProps> = () => {
  return (
    <Drawer.Navigator
      drawerStyle={styles.DrawerStyles}
      initialRouteName="Home"
      // @ts-ignore
      // eslint-disable-next-line react/jsx-props-no-spreading
      drawerContent={(props) => <LikaDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={RenderHomeStack} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};
