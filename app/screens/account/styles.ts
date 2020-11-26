import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40
    // marginTop: 10
  },
  Title: {
    color: Colors.orange900,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  Form: {},
  TextBox: {
    marginBottom: 20
  },
  Password: {
    // marginTop: 20
  },
  PwdTitle: {
    fontWeight: 'bold'
  },
  PasswordTextInput: {
    borderWidth: 0
  }
});

export default styles;
