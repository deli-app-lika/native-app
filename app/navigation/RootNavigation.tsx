import {NavigationContainer, Theme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {DrawerNav} from './drawer/DrawerNav';
import {navigationRef} from './NavigationService';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';

interface RootNavigatorProps {
  theme: Theme;
}

//const AuthStack = createStackNavigator<AuthParamList>();
const usersCollection = firestore().collection('Users');

export const RootNavigator: React.FC<RootNavigatorProps> = ({theme}) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<IUser>();
  // Handle user state changes
  function onAuthStateChanged(user: any) {
    console.log('called auth state change');
    setUser(user);
    if (initializing) setInitializing(false);
  }

  //  sign out
  const signUserOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  // set ananymous auth
  const anonymousSignIn = () => {
    console.log('function anaymousignin');
    if (!user) {
      console.log('no user');
      auth()
        .signInAnonymously()
        .then((user) => {
          //console.log(user.user.uid);
          // const userDocument = firestore()
          //   .collection('Users')
          //   .doc(user.user.uid)
          //   .set({
          //     uid: user.user.uid,
          //     isAnonymous: user.user.isAnonymous,
          //   });
          console.log(user.user.uid);
          console.log('User signed in anonymously');
          //console.log(userDocument);
        })
        .catch((error) => {
          if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
          }
          console.error(error);
        });
      console.log(user);
    } else {
      console.log('user');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    console.log('initializing');
    return null;
  }
  if (!user) {
    console.log('user not signed in');
    anonymousSignIn();
  }
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <DrawerNav />
      {/* button just to test ananymous sigin in after log out */}
      <Button title="Sigin out" onPress={signUserOut} />
    </NavigationContainer>
  );
};

{
  /* <AuthStack.Navigator
          screenOptions={{header: () => null}}
          initialRouteName="Login">
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegisterScreen} />
          <AuthStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </AuthStack.Navigator> */
}
