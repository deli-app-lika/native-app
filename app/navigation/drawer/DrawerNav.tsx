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
import {getLocationPermission} from '../../services/api/permissions/location';
import {firestore} from 'firebase';
import {useDispatch, useSelector} from 'react-redux';
import {addAnonymousUser} from '../../services/api/firebase/users';
import {setUserData, setUserLocation} from '../../actions/authActions';
import {formatLocation} from '../../utils/helperMethods';

export const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator<HomeParamList>();

interface DrawerNavProps {}

const renderHomeStack = () => {
  // @ts-ignore
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getLocation = async () => {
    try {
      if (Platform.OS === 'android') {
        // Calling the permission function
        getLocationPermission().then((granted) => {
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
              {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
            );
          } else {
            console.log('denied location permission');
          }
        });
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
    getLocation();
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
