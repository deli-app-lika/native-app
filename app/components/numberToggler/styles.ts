import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.grey800,
    borderRadius: 5,
    height: '75%',
    alignSelf: 'center'
  },
  countText: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    color: Colors.grey900
  },
  count: {
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchable: {
    minWidth: 35,
    minHeight: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent'
    // backgroundColor: 'yellow'
  },
  buttonText: {
    fontSize: 15,
    color: Colors.grey500
  }
});
export default styles;
