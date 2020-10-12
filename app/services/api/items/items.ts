import firestore from '@react-native-firebase/firestore';
import {ICocktail} from './../../../models/cocktail';
import {IItem} from './../../../models/item';

export const getIngredients = async (cocktail: ICocktail) => {
  const ingredients = cocktail.ingredients;
  const items: IItem[] = [];
  ingredients.forEach(async (ingredient) => {
    const item = await firestore()
      .collection('inventory')
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
