import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  ScrollViewContianer: {
    flex: 1,
    marginTop: 30,
  },
  ScrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  Thumbnail: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Image: {
    width: 200,
    height: 100,
  },
  CocktailName: {
    textAlign: 'center',
    fontSize: 20,
    color: '#cc0e80',
  },
});
export default styles;
