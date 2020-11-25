import firestore from '@react-native-firebase/firestore';
import { ICocktail } from '../../../models/cocktail';

const getIngredients = async (cocktail: ICocktail) => {
  const { ingredients } = cocktail;
  console.log('ingreedients', ingredients);

  const inventoryRef = firestore()
    .collection('Shops')
    // TODO use geo location to get shop
    .doc('b36af212-d100-46ed-a758-71c7d2e1040c')
    .collection('Inventory');

  const ingredientList = ingredients.map(async (ingredient) => {
    const item = await inventoryRef
      // TODO update this query to use name and not itemName
      .where('itemName', '==', ingredient.ingredient)
      .get();

    console.log('shoppppp', item);
    if (item.empty) {
      console.log('No matching documents.');
      return;
    }

    item.forEach((doc) => {
      console.log('results loop', doc.id, '=>', doc.data());
    });
  });
  return ingredientList;
};

export default getIngredients;
