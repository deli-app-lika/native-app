import { Colors, IconButton } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import NavigationService from '../NavigationService';
import { logout } from '../../actions/authActions';
import { AppState } from '../../store/configureStore';
import { IAnonymousUser } from '../../models/user';

interface LikaDrawerProps {
  props: any;
}

const LikaDrawer: React.FC<LikaDrawerProps> = (props) => {
  const user = useSelector(
    (state: AppState) => state.default as IAnonymousUser
  );
  const dispatch = useDispatch();

  //  sign out
  const signUserOut = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch(logout(user.location));
      });
  };

  return (
    <View>
      <View style={styles.DrawerContainer}>
        <View style={styles.Header}>
          <View style={styles.BackArrow}>
            <IconButton
              icon="keyboard-backspace"
              color={Colors.black}
              size={40}
              onPress={() => {
                // @ts-ignore
                props.navigation.closeDrawer();
              }}
            />
          </View>
          <View style={styles.HeaderBody}>
            <Text style={styles.HeaderTitle}>LIKA</Text>
          </View>
        </View>
        <View style={styles.AccountSection}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.DrawerHeaderText}>ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.DrawerItem}>Account Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate('Payments');
            }}
          >
            <Text style={styles.DrawerItem}>Payment Information</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.DrawerItem}>Addresses</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.DrawerItem}>Notifications</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.MaintenanceSection}>
          <Text style={styles.DrawerHeaderText}>HELP</Text>
          <Text style={styles.DrawerItem}>Contact Us</Text>
          <Text style={styles.DrawerItem}>Terms of Service</Text>
          <Text style={styles.DrawerItem}>Privacy Policy</Text>
          {!user.isNewUser ? (
            <TouchableOpacity
              onPress={() => {
                signUserOut();
              }}
            >
              <Text style={styles.DrawerItem}>Logout</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.DrawerItem}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default LikaDrawer;
