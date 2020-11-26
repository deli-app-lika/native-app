import { Colors, IconButton, Searchbar, Text } from 'react-native-paper';

import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { AppState } from '../../store/configureStore';
import { IUser } from '../../models/user';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const user = useSelector((state: AppState) => state.default as IUser);
  console.log('user from search', user);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <View style={styles.Container}>
      <Searchbar
        style={styles.SearchBarStyles}
        placeholder="Search for a product or recipe"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.InputAndBarCode}>
        <IconButton
          icon="barcode"
          color={Colors.black}
          size={60}
          onPress={() => console.log('Pressed')}
        />
        <Text style={styles.BarcodeLabel}>Scan Barcode</Text>
      </View>
    </View>
  );
};
export default Search;
