import firestore, {
  FirebaseFirestoreTypes
} from '@react-native-firebase/firestore';
import { ICocktail, IIngredients } from '../../../models/cocktail';

export const cleanResults = (
  results: Promise<{
    response: FirebaseFirestoreTypes.QuerySnapshot<
      FirebaseFirestoreTypes.DocumentData
    >;
    ingre: IIngredients;
  }>[]
) => {
  console.log('clean results', results);
  return results.map((result) => {
    // @ts-ignore
    const { ingre } = result;
    let inventoryData = { outOfStock: true };
    // @ts-ignore
    if (result.response.docs.length > 0) {
      inventoryData = {
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        itemQuantity: result.response.docs[0]._data.itemQuantity,
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        uid: result.response.docs[0]._data.uid,
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        currency: result.response.docs[0]._data.currency,
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        price: result.response.docs[0]._data.price,
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        size: result.response.docs[0]._data.size,
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        unit: result.response.docs[0]._data.unit,
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        outOfStock: !(result.response.docs[0]._data.itemQuantity > 0)
      };
    }

    const ingreForList = {
      ...inventoryData,
      ...ingre
    };
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    console.log('result inside', ingreForList);

    return ingreForList;
  });
};

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
    // TODO log when no match found
    if (response.empty) {
      console.log(
        '***ingredient not found in store inventory',
        response,
        ingre
      );
    }

    return {
      response,
      ingre
    };
  });
  return promises;
};

export default getIngredients;
