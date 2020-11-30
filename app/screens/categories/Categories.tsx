import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator, Colors, Text } from 'react-native-paper';
import { ICocktail } from '../../models/cocktail';
import NavigationService from '../../navigation/NavigationService';
import { getCategoryCocktails } from '../../services/api/cocktails/categories';
import styles from './style';

interface CategoriesProps {
  category: string;
}

const Categories: React.FC<CategoriesProps> = ({ category }) => {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);

  const getCocktails = useCallback(async () => {
    const fetchedCocktails = await getCategoryCocktails(category);
    setCocktails(fetchedCocktails);
    // console.log('In Catss', cocktails, 'end in cats');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCocktails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cocktails.length) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator animating color={Colors.pink800} />
      </View>
    );
  }
  const renderCocktails = cocktails.map((cocktail: ICocktail) => {
    return (
      <TouchableOpacity
        key={cocktail.uid}
        onPress={() => {
          NavigationService.navigate('Cocktail', cocktail);
          // route.navigation.navigate('Cocktail');
        }}
      >
        <View style={styles.Thumbnail}>
          <FastImage
            style={styles.Image}
            source={{
              uri: cocktail.image,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.CocktailName}>{cocktail.name}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={styles.ScrollViewContianer}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>{renderCocktails}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Categories;
