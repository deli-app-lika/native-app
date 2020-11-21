import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  conainer: { flex: 1, backgroundColor: Colors.grey300 },
  sectionView: {
    // backgroundColor: 'yellow',
    // height: '100%'
  },
  titleView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
    // backgroundColor: 'blue'
  },
  titleText: { color: Colors.orange800, fontSize: 25, fontWeight: 'bold' },
  itemView: {
    height: 200,
    width: 120,
    // backgroundColor: 'lightgrey',
    margin: 10,
    flexDirection: 'column'
  },
  itemImageView: {
    flex: 2,
    // backgroundColor: 'purple',
    marginBottom: 10
  },
  itemImage: {
    flex: 2,
    height: undefined,
    width: undefined
  },
  itemPropertiesView: {
    flex: 1
    // backgroundColor: 'green'
  },
  itemNameView: {
    flex: 2
    // backgroundColor: 'pink'
  },
  itemName: {
    color: 'black'
  },
  itemDetailsView: {
    flex: 1,
    // backgroundColor: 'orange',
    flexDirection: 'row'
  },
  itemPrice: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5
  },
  itemSize: {
    color: 'black'
  }
});
export default styles;
