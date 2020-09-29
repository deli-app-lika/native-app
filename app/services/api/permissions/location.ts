import React from 'react';
import {PermissionsAndroid, PermissionStatus, Platform} from 'react-native';
import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';

export const getLocationPermission = async () => {
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
      return granted;
      //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //     console.log('granted location permission');
      //     getCurrentLocation();
      //   } else {
      //     console.log('denied location permission');
      //   }
    } else {
      // TODO IOS code
      // getOneTimeLocation();
      //subscribeLocationLocation();
    }
  } catch (err) {
    console.log(err);
  }
};

export const getGeoLocation = () => {
  //Geolocation.getCurrentPosition((info) => console.log(info));
};

export const getCurrentLocation = (granted: any) => {
  let initialPosition = null;
  console.log('inside of current location granted: ' + JSON.stringify(granted));
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('gratnted = true');
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        initialPosition = JSON.stringify(position);
        console.log('itial pos in get cur ' + initialPosition);
        return initialPosition;
      },
      (error: GeolocationError) => console.log('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    console.log('at then end post: ' + initialPosition);
    return initialPosition;
  }
};

export const getCurPost = Geolocation.getCurrentPosition(
  (position: GeolocationResponse) => {
    const initialPosition = JSON.stringify(position);
    console.log('itial pos in get cur ' + initialPosition);
    return initialPosition;
  },
  (error: GeolocationError) => console.log('Error', JSON.stringify(error)),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
);

// returns watch id
export const getLastLocationWatch = () => {
  return Geolocation.watchPosition((position: GeolocationResponse) => {
    console.log('get last position watch' + JSON.stringify(position));
    //TODO possibly assign watch position to state
    //JSON.stringify(position);
  });
};

// takes watchid and clears watch. prob use for when component is being unmounted. or app is closed
export const clearWatch = (watchID: number) => {
  Geolocation.clearWatch(watchID);
};
