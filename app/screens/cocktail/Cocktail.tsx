import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  ActivityIndicator,
  Colors,
  IconButton,
  Text
} from 'react-native-paper';
import { ICocktail } from '../../models/cocktail';
import NavigationService from '../../navigation/NavigationService';
import { BartenderStackNavProps } from '../../navigation/types/BartenderParamList';
import getIngredients, {
  cleanResults
} from '../../services/api/ingredients/ingredients';
import styles from './styles';

// interface CocktailProps {
//   cocktail: ICocktail;
// }

const Cocktail: React.FC<BartenderStackNavProps<'Cocktail'>> = ({ route }) => {
  const [ingredientsList, setIngredientsList] = useState<any[]>([]);
  const { params } = route;
  const { height } = Dimensions.get('window');
  const { width } = Dimensions.get('window');

  const fetchInventory = useCallback(async () => {
    try {
      const temp = await getIngredients(params);
      console.log('temp', temp);

      const done = await Promise.all(temp).then((data) => {
        // @ts-ignore
        const doneData = cleanResults(data);
        console.log('actually done', doneData);
        return doneData;
      });
      console.log('done yoooooooo');
      // @ts-ignore
      setIngredientsList(done);
    } catch (e) {
      console.log('exception occured', e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderIngredients = ingredientsList.map((cocktail: ICocktail) => {
    console.log('cocktail===', cocktail);
    return (
      <TouchableOpacity
        key={cocktail.uid}
        onPress={() => {
          NavigationService.navigate('Cocktail', cocktail);
          // route.navigation.navigate('Cocktail');
        }}
      >
        <View style={styles.ingredient}>
          <IconButton
            icon="circle-slice-8"
            color={Colors.pink300}
            size={20}
            onPress={() => {}}
          />
          <FastImage
            style={{ width: 25, height: 50 }}
            source={{
              uri:
                'https://cdn3.alegra.com/69f2f33437015bd18c9e459aae41f6a319953c9b-1598478470-WhatsApp+Image+2020-08-26+at+4.30.48+PM+%282%29.jpeg?Expires=1602973251&Signature=nwOsqp9wmZdYGH1vad5Pk~YGrzldPUrnRa~GrG2I8SQfg2zClzru4-CWyur8fHKhrFvEI23SR2D-rIslek7vbr5~vSkDI96oA5je~FHqJfuXxlMQguCU77mguCdENrK6bMthQ8N2nsqdeg1Xzp6wMq2YPx~tn-TKowP7ToedaS8K1s1Mmuy7KdkPKmPUHWUze8q9mBWBsRYnZ2v38C8MSqTFafNLzIauRRSxzwDaBGL51l-~AO7mtb6V1pEY9MyxN3UOpe6LOf7QMMh4FTbsoSRwrheWBLDwGX6YmCorlPIAuTP8NII~lMrJZbNWtSO3~MgF5z-wXXRewnydFnlOSA__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ',
              priority: FastImage.priority.normal
            }}
            // resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.ingredientText}>LICOR IMPORTADO</Text>
          <Text style={styles.ingredientPrice}>$50.00</Text>
        </View>
      </TouchableOpacity>
    );
  });

  useEffect(() => {
    fetchInventory();
    console.log('ready list yo', ingredientsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (ingredientsList.length > 0) {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    console.log('list', ingredientsList[0].response._docs);
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    // console.log('list', ingredientsList[0]);
  } else {
    console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmote set');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <IconButton
          icon="close"
          color={Colors.pink300}
          size={25}
          onPress={() => {
            NavigationService.goBack();
          }}
        />
        <IconButton
          icon="heart-outline"
          color={Colors.pink300}
          size={25}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={styles.cocktailImage}>
        <FastImage
          style={{ width, height: height * 0.25 }}
          source={{
            // TODO
            // @ts-ignore
            uri: params.image,
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.titleCart}>
        <Text style={styles.textDisplay}>{params.name}</Text>
        <View style={styles.cartButton}>
          <TouchableOpacity
            onPress={() => {
              console.log('pressed');
              NavigationService.navigate('Cart', params);
            }}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ingredientsList}>
        <ScrollView>
          {ingredientsList && ingredientsList.length > 1 ? (
            renderIngredients
          ) : (
            <View style={styles.container}>
              <Text>Loading...</Text>
              <ActivityIndicator animating color={Colors.pink800} />
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.directionText}>
        <Text style={styles.textDisplay}>Directions</Text>
        <View style={styles.cartButton}>
          <TouchableOpacity onPress={() => console.log('pressed')}>
            <Text style={styles.buttonText}>Text Me Recipe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Cocktail;
