import React from 'react';
import { View } from 'react-native';
import { Colors, IconButton, Text } from 'react-native-paper';
import styles from './style';

interface StackHeaderProps {
  navigation: any;
  disableBack?: boolean;
}

const StackHeader: React.FC<StackHeaderProps> = ({
  navigation,
  disableBack
}) => {
  return (
    <View style={styles.Header}>
      <View style={styles.BackArrow}>
        {!disableBack && (
          <IconButton
            icon="keyboard-backspace"
            color={Colors.black}
            size={40}
            onPress={() => {
              // @ts-ignore
              navigation.goBack();
            }}
          />
        )}
      </View>
      <View style={styles.HeaderBody}>
        <Text style={styles.HeaderTitle}>LIKA</Text>
      </View>
    </View>
  );
};
export default StackHeader;
