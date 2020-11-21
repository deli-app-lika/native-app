import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  topHeader: {
    width: '100%',
    height: '4%',
    marginBottom: 25,
    position: 'relative',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start'
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 30
  },
  itemList: {
    marginLeft: 15,
    marginRight: 15
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
  item: {
    flex: 3,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginTop: 5
    // backgroundColor: 'yellow'
  },
  itemText: {
    // textAlign: 'left',
    flexShrink: 1,
    alignSelf: 'center'
    // marginRight: 5
  },
  itemPrice: {
    color: Colors.orange800,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    flexShrink: 1,
    fontSize: 15
  },
  itemNameImage: {
    flex: 3,
    flexDirection: 'row'
    // backgroundColor: 'red'
  },
  itemImage: {
    width: 25,
    height: 50,
    marginRight: 10
  },
  numberToggler: {
    justifyContent: 'center',
    flex: 2
    // backgroundColor: 'orange'
  },
  itemPriceView: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
    // backgroundColor: 'green'
  },
  cartTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cartMainTitle: {
    color: Colors.orange800,
    fontSize: 25,
    fontWeight: 'bold'
  },
  cartSubTitle: {
    marginLeft: 10,
    fontSize: 15,
    color: Colors.orange800,
    fontWeight: 'bold'
  },
  summaryItems: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5
  },
  summaryPriceView: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  summaryPriceLine: {
    flexDirection: 'row'
  },
  summaryPriceItemTitle: {
    color: Colors.orange800,
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1
  },
  summaryPriceItemValue: {
    flex: 1,
    color: Colors.orange800,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'flex-end'
  },
  summaryPriceTotal: {
    color: Colors.orange800,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
  summaryPriceTotalValue: {
    flex: 1,
    color: Colors.orange800,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'flex-end'
  },
  accountView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountSignin: {
    color: Colors.orange800,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default styles;
