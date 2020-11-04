import Geolocation, {
  GeolocationError,
  GeolocationResponse
} from '@react-native-community/geolocation';
import { PermissionsAndroid, PermissionStatus } from 'react-native';

export const getGeoLocation = () => {
  // Geolocation.getCurrentPosition((info) => console.log(info));
};

// if state can be updated in here this can be used
export const getCurrentLocation = (granted: any) => {
  let initialPosition = null;
  console.log(`inside of current location granted: ${JSON.stringify(granted)}`);
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('gratnted = true');
    // return new Promise<any>((resolve, reject) => {
    // TODO look into how to create.
    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        initialPosition = JSON.stringify(position);
        console.log(`itial pos in get cur ${initialPosition}`);
        return initialPosition;
      },
      (error: GeolocationError) => console.log('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    // });
    // console.log('at then end post: ' + initialPosition);
    // return initialPosition;
  }
};

// returns watch id
export const getLastLocationWatch = () => {
  return Geolocation.watchPosition((position: GeolocationResponse) => {
    console.log(`get last position watch${JSON.stringify(position)}`);
    // TODO possibly assign watch position to state
    // JSON.stringify(position);
  });
};

// takes watchid and clears watch. prob use for when component is being unmounted. or app is closed
export const clearWatch = (watchID: number) => {
  Geolocation.clearWatch(watchID);
};

// gets location permission
export const getLocationPermission = async (): Promise<PermissionStatus> => {
  // TODO make sure this works and change the name to somthing simple
  const temp = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'LIKA would like to use your location',
      message: 'Location message ',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK'
    }
  );
  return temp;
};
