import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  countText: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#27AAE1'
  },

  count: {
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchable: {
    minWidth: 35,
    minHeight: 35,
    borderWidth: 1,
    borderColor: '#27AAE1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 15,
    color: '#27AAE1'
  }
});
export default styles;
