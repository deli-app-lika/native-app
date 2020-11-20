import Geolocation, {
  GeolocationError,
  GeolocationResponse
} from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';
import React, { useEffect } from 'react';
import {
  StackHeaderProps,
  createStackNavigator
} from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import Account from '../../screens/Account';
import BottomNav from '../bottom/BottomNav';
import Help from '../../screens/Help';
import { HomeParamList } from '../types/HomeparamList';
import LikaDrawer from './LikaDrawer';
import LikaHeader from '../header/Header';
import addAnonymousUser from '../../services/api/firebase/users';
// eslint-disable-next-line
import { createDrawerNavigator } from '@react-navigation/drawer';
import { formatLocation } from '../../utils/helperMethods';
import { getLocationPermission } from '../../services/api/permissions/location';
import { setUserLocation } from '../../actions/authActions';
// eslint-disable-next-line
import { useNavigationState } from '@react-navigation/native';

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
              { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
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
    </HomeStack.Navigator>
  );
};

export const DrawerNav: React.FC<DrawerNavProps> = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: '100%', height: '100%' }}
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
