import { Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 30
  },
  Title: {
    color: Colors.orange900,
    fontSize: 25,
    marginBottom: 50,
    marginTop: 30,
    fontWeight: 'bold'
  },
  AddCardContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  AvailableCards: {
    flex: 0.9,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AddCardText: {
    color: Colors.grey500,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  },
  AddCard: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  AddCardIcon: {
    flex: 0.2
  },
  CardIcon: {
    margin: 0
  }
});
export default styles;
