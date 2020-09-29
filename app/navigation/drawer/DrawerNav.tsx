import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactChild, ReactChildren, useEffect} from 'react';
import {Button, View} from 'react-native';

import {Account} from '../../screens/Account';
import {Help} from '../../screens/Help';
import {Home} from '../../screens/Home';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {BottomNav} from '../bottom/BottomNav';
import {HomeParamList} from '../types/HomeparamList';
import {PermissionsAndroid, PermissionStatus, Platform} from 'react-native';
import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {
  getCurPost,
  getCurrentLocation,
  getLocationPermission,
} from '../../services/api/permissions/location';
import {firestore} from 'firebase';
import {useDispatch, useSelector} from 'react-redux';
import {addAnonymousUser} from '../../services/api/firebase/users';
import {setUserData} from '../../actions/auth';

export const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator<HomeParamList>();

interface DrawerNavProps {}

const renderHomeStack = () => {
  // @ts-ignore
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getLocationPermission = async () => {
    // We need to ask permission for Android only
    try {
      if (Platform.OS === 'android') {
        // Calling the permission function
        console.log('plate form andorid');
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'LIKA would like to use your location',
            message: 'Location message ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log(JSON.stringify('granted = ' + granted));
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('granted location permission');
          Geolocation.getCurrentPosition(
            (position: GeolocationResponse) => {
              const initialPosition = JSON.stringify(position);
              console.log('itial pos in get cur ' + initialPosition);
              console.log('redux test ' + state.uid);
              if (state.isLoggedIn) {
                console.log('here we go(mario voice)');
                const updatedUser = {
                  ...state,
                  ...{
                    location: {
                      long: position.coords.longitude,
                      lad: position.coords.latitude,
                    },
                  },
                };
                addAnonymousUser(updatedUser);
                dispatch(setUserData(updatedUser));
              }
            },
            (error: GeolocationError) =>
              console.log('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
          );
        } else {
          console.log('denied location permission');
        }
      } else {
        // TODO IOS code
        // getOneTimeLocation();
        //subscribeLocationLocation();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLocationPermission();
  }, []);

  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={BottomNav} />
    </HomeStack.Navigator>
  );
};

export const DrawerNav: React.FC<DrawerNavProps> = ({}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={renderHomeStack} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};
