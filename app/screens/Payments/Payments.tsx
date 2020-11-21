import { Text, View } from 'react-native';

import React from 'react';
import { Colors, IconButton } from 'react-native-paper';
import styles from './styles';
import NavigationService from '../../navigation/NavigationService';

interface PaymentsProps {}

const Payments: React.FC<PaymentsProps> = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Payment Information</Text>
      <View style={styles.AddCardContainer}>
        <View style={styles.AddCard}>
          <IconButton
            style={styles.CardIcon}
            icon="credit-card"
            color={Colors.grey400}
            size={50}
            onPress={() => {
              NavigationService.navigate('InputPayment');
            }}
          />
          <View>
            <Text style={styles.AddCardText}>Add A Card</Text>
          </View>
        </View>
        <View style={styles.AddCardIcon}>
          <IconButton
            icon="plus"
            color={Colors.green900}
            size={30}
            onPress={() => {
              NavigationService.navigate('InputPayment');
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Payments;
