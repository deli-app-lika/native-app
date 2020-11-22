import { StyleSheet } from 'react-native';
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
    height: '4%',
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
  imageView: {
    marginTop: 0,
    paddingTop: 0
    // height: '45%',
    // backgroundColor: 'green'
    // marginTop: 5
  },
  itemImage: {
    marginTop: 0,
    paddingTop: 0
    // backgroundColor: 'yellow'
  },
  addToCart: {
    position: 'absolute',
    // left: 0,
    right: 0,
    bottom: 0,
    // margin: 20,
    // padding: 15,
    // bottom: 0
    backgroundColor: Colors.orange800
  },
  itemDetailsView: {
    // backgroundColor: 'pink',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  itemName: { fontWeight: 'bold', fontSize: 20 },
  itemProperties: { fontSize: 15, fontWeight: 'bold' },
  itemGroupProperties: { flexDirection: 'row' }
});
export default styles;
