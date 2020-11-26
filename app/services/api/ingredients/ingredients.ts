import firestore from '@react-native-firebase/firestore';
import { ICocktail } from '../../../models/cocktail';

// const getIngredients1 = (cocktail: ICocktail) => {
//   const { ingredients } = cocktail;
//   console.log('ingreedients', ingredients);

//   const inventoryRef = firestore()
//     .collection('Shops')
//     // TODO use geo location to get shop
//     .doc('b36af212-d100-46ed-a758-71c7d2e1040c')
//     .collection('Inventory');

//   // const ingredientList =
//   let i = 0;
//   return ingredients.map(async (ingredient) => {
//     i += 1;
//     const item = await inventoryRef
//       // TODO update this query to use name and not itemName
//       .where('itemName', '==', ingredient.ingredient)
//       .get();

//     console.log('shoppppp', i, item);

//     if (item.empty) {
//       console.log('No matching documents.');
//       // eslint-disable-next-line no-useless-return
//       return;
//     }
//     return item;

//     // item.forEach((doc) => {
//     //   console.log('results loop', doc.id, '=>', doc.data());
//     // });

//     // eslint-disable-next-line consistent-return
//     // return item;
//   });
//   // return ingredientList;
// };

const getIngredients = async (cocktail: ICocktail) => {
  const { ingredients } = cocktail;
  console.log('ingreedients', ingredients);

  const inventoryRef = firestore()
    .collection('Shops')
    // TODO use geo location to get shop
    .doc('b36af212-d100-46ed-a758-71c7d2e1040c')
    .collection('Inventory');

  const promises = ingredients.map(async (ingre) => {
    // request details from GitHub’s API with Axios
    const response = await inventoryRef
      // TODO update this query to use name and not itemName
      .where('itemName', '==', ingre.ingredient)
      .get();

    return {
      response
    };
  });
  const results = await Promise.all(promises);
  return results;
  // return promises;
};

export default getIngredients;
