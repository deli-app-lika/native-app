import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  conainer: { flex: 1 },
  title: { flexDirection: 'row', alignItems: 'center', marginLeft: 20 },
  titleText: { color: Colors.orange800, fontSize: 25, fontWeight: 'bold' },
  itemView: {
    height: 100,
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  itemImageView: {
    justifyContent: 'center'
  },
  itemImage: {
    marginRight: 10,
    height: 100,
    width: 100,
    alignSelf: 'flex-start'
  },
  itemDetails: {
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  itemDetailsTop: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
    // backgroundColor: 'pink'
  },
  itemDetailsIcon: {
    flexDirection: 'column',
    // backgroundColor: 'black',
    right: 0,
    top: 0,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    // alignItems: 'flex-start',
    position: 'absolute'
  },
  itemDetailsName: { fontSize: 20, color: Colors.orange800 },
  itemDetailsBottom: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  itemDetailsCategory: { fontSize: 15, color: Colors.orange800 }
});

export default styles;
