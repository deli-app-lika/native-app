import { I18nManager, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'black'
  },
  topHeader: {
    width: '100%',
    height: '8%',
    // height: 0,
    // marginBottom: 25,
    position: 'relative',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start'
  },
  topIcon: {
    marginTop: 0,
    paddingTop: 0
  },
  Title: {
    color: Colors.orange900,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  InputsWrapper: {
    width: '100%'
  },
  InputContainer: {
    height: 42,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 25,
    textAlign: I18nManager.isRTL ? 'right' : 'left'
  },
  ErrorText: {
    fontSize: 10,
    color: 'red',
    textAlign: 'center'
  },
  LoginContainer: {
    width: '70%',
    borderRadius: 25,
    padding: 5,
    marginTop: 30,
    alignSelf: 'center'
  },
  Forgot: {
    marginTop: 12
  },
  LabelStyle: {
    fontSize: 12,
    color: Colors.orange900
  },
  OrTextStyle: {
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.orange900
  }
});
export default styles;
