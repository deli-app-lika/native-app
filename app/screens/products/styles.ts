import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const styles = StyleSheet.create({
  conainer: { flex: 1 },
  titleView: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'blue'
  },
  titleText: { color: Colors.orange800, fontSize: 25, fontWeight: 'bold' },
  itemView: { backgroundColor: 'red', width: '100%', flexDirection: 'column' },
  itemImageView: {
    flex: 1
  },
  itemImage: {
    marginRight: 10,
    height: 100,
    width: 100
    // alignSelf: 'flex-start'
  }
});
export default styles;
