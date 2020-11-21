import { Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.grey300,
    height: 70
  },
  HeaderText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.orange800
  }
});
export default styles;
