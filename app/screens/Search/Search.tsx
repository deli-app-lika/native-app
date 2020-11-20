import { Colors, IconButton, Searchbar, Text } from 'react-native-paper';

import React from 'react';
import { View } from 'react-native';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <View style={{ backgroundColor: Colors.orange900, height: '100%' }}>
      <Searchbar
        style={{ backgroundColor: Colors.pink100, height: 60 }}
        placeholder="Search for a product or recipe"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View
        style={{
          height: 60,
          backgroundColor: 'white',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <IconButton
          icon="barcode"
          color={Colors.black}
          size={60}
          onPress={() => console.log('Pressed')}
        />
        <Text style={{ color: Colors.orange900, fontSize: 20 }}>
          Scan Barcode
        </Text>
      </View>
    </View>
  );
};
export default Search;
