import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
    // margin: 20
  },
  topHeader: {
    width: '100%',
    height: '4%',
    marginBottom: 5,
    position: 'relative',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  itemList: {
    // height: '47%',
    // borderWidth: 1,
  },
  directionText: {
    width: '100%',
    height: '5%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  textDisplay: {
    color: Colors.pink300,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10
  },
  cartButton: {
    borderWidth: 1,
    borderColor: Colors.pink300,
    width: 100,
    marginRight: 10
  },
  buttonText: {
    color: Colors.pink300,
    textAlign: 'center'
  },
  ingredient: {
    flex: 3,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5
  },
  ingredientText: {
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 20
  },
  ingredientPrice: {
    color: Colors.pink300,
    textAlign: 'center',
    marginRight: 20,
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});
export default styles;
