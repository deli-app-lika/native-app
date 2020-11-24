import firestore from '@react-native-firebase/firestore';
import { ICocktail } from '../../../models/cocktail';

const getIngredients = async (cocktail: ICocktail) => {
  const { ingredients } = cocktail;

  ingredients.forEach(async (ingredient) => {
    const item = await firestore()
      .collection('inventory')
      // TODO update
      // @ts-ignore
      .where('searchName', '==', ingredient.name.toLowerCase())
      .get();

    if (item.empty) {
      console.log('No matching documents.');
      return;
    }

    item.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  });
};

export default getIngredients;
