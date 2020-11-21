import { Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.orange900,
    height: '100%'
  },
  SearchBarStyles: {
    backgroundColor: Colors.pink100,
    height: 60
  },
  InputAndBarCode: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  BarcodeLabel: {
    color: Colors.orange900,
    fontSize: 20
  }
});
export default styles;
