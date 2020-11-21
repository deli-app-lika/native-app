import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  DrawerContainer: {
    backgroundColor: Colors.orange900,
    height: '100%'
  },
  Header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  DrawerHeaderText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginBottom: 30
  },
  DrawerItem: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10
  },
  BackArrow: {
    flex: 0.1
  },
  HeaderBody: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 0.9
  },
  HeaderTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: Colors.pink800,
    textAlign: 'center'
  },
  DrawerStyles: {
    width: '100%',
    height: '100%'
  },
  AccountSection: {
    marginTop: 10,
    marginLeft: 50,
    flex: 0.4
  },
  MaintenanceSection: {
    marginTop: 30,
    marginLeft: 50,
    flex: 0.4
  }
});
export default styles;
