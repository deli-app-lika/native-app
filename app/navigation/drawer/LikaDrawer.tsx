import { Colors, IconButton } from 'react-native-paper';
import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import styles from './style';

interface LikaDrawerProps {
  props: any;
}

const LikaDrawer: React.FC<LikaDrawerProps> = (props) => {
  return (
    <View>
      <View style={{ backgroundColor: Colors.orange900, height: '100%' }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View style={{ flex: 0.1 }}>
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
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 0.9
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 40,
                color: Colors.pink800,
                textAlign: 'center'
              }}
            >
              LIKA
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 50,
            flex: 0.4
          }}
        >
          <Text style={styles.DrawerHeaderText}>ACCOUNT</Text>
          <Text style={styles.DrawerItem}>Account Details</Text>
          <Text style={styles.DrawerItem}>Payment Information</Text>
          <Text style={styles.DrawerItem}>Addresses</Text>
          <Text style={styles.DrawerItem}>Notifications</Text>
        </View>
        <View
          style={{
            marginTop: 30,
            marginLeft: 50,
            flex: 0.4
          }}
        >
          <Text style={styles.DrawerHeaderText}>HELP</Text>
          <Text style={styles.DrawerItem}>Contact Us</Text>
          <Text style={styles.DrawerItem}>Terms of Service</Text>
          <Text style={styles.DrawerItem}>Privacy Policy</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('pressed')}>
          <View
            style={{
              marginLeft: 50,
              //   flex: 0.2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              borderWidth: 2,
              borderColor: Colors.grey600,
              width: 250,
              height: 80
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                LOG OUT
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LikaDrawer;
