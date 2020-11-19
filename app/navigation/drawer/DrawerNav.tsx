import Geolocation, {
  GeolocationError,
  GeolocationResponse
} from '@react-native-community/geolocation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLocation } from '../../actions/authActions';
import Account from '../../screens/Account';
import Help from '../../screens/Help';
import addAnonymousUser from '../../services/api/firebase/users';
import { getLocationPermission } from '../../services/api/permissions/location';
import { formatLocation } from '../../utils/helperMethods';
import BottomNav from '../bottom/BottomNav';
import { HomeParamList } from '../types/HomeparamList';

export const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator<HomeParamList>();

interface DrawerNavProps {}

const RenderHomeStack = () => {
  // @ts-ignore
  const state = useSelector((innerState) => innerState.auth);
  const dispatch = useDispatch();
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
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={BottomNav} />
    </HomeStack.Navigator>
  );
};

export const DrawerNav: React.FC<DrawerNavProps> = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={RenderHomeStack} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};
