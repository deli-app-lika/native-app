import React, { useEffect } from 'react';

import { PermissionsAndroid, Platform } from 'react-native';
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

import { setUserLocation } from '../../actions/authActions';
// import Account from '../../screens/Account/Account';
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
import StackHeader from './StackHeader';
import Account from '../../screens/account/Account';
import LoginScreen from '../../screens/auth/login/LoginScreen';
import RegisterScreen from '../../screens/auth/register/RegisterScreen';

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
            return <StackHeader navigation={navigation} />;
          }
        })}
      />
      <HomeStack.Screen
        name="InputPayment"
        component={NewCardEntry}
        options={({ navigation }) => ({
          header: () => {
            return <StackHeader navigation={navigation} />;
          }
        })}
      />
      <HomeStack.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          header: () => {
            return <StackHeader navigation={navigation} />;
          }
        })}
      />
      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }) => ({
          header: () => {
            return <StackHeader disableBack navigation={navigation} />;
          }
        })}
      />
      <HomeStack.Screen
        name="Register"
        component={RegisterScreen}
        options={({ navigation }) => ({
          header: () => {
            return <StackHeader disableBack navigation={navigation} />;
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
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};
