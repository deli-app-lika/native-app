import firestore from '@react-native-firebase/firestore';
import { ICocktail } from '../../../models/cocktail';

export enum CategoriesList {
  'tequila',
  'vodka',
  'whiskey'
}

export const getCategoryCocktails = async (
  category: string
): Promise<ICocktail[]> => {
  try {
    const fetchedCocktails = await firestore()
      .collection('Cocktails')
      .where('category', '==', category.toLowerCase())
      .get();

    if (fetchedCocktails.empty) {
      console.log('No matching cocktails.');
      return [];
    }
    // console.log('from firbase', fetchedCocktails.docs);
    const cleanCocktails = fetchedCocktails.docs.map((cocktail: any) => {
      // // eslint-disable-next-line no-underscore-dangle
      // console.log('cccccccccccc', cocktail._data);
      // // eslint-disable-next-line no-underscore-dangle
      // console.log(cocktail._data.category);
      const cleanCocktail: ICocktail = {
        // eslint-disable-next-line no-underscore-dangle
        uid: cocktail._data.uid,
        // eslint-disable-next-line no-underscore-dangle
        name: cocktail._data.name,
        // eslint-disable-next-line no-underscore-dangle
        searchName: cocktail._data.searchName,
        // eslint-disable-next-line no-underscore-dangle
        ingredients: cocktail._data.ingredients,
        // eslint-disable-next-line no-underscore-dangle
        instructions: cocktail._data.instructions,
        // eslint-disable-next-line no-underscore-dangle
        image: cocktail._data.image,
        // eslint-disable-next-line no-underscore-dangle
        category: cocktail._data.category
      };
      // console.log('XXXXXXXXXXXXXXXX clean', '=>', cleanCocktail, 'end clean');
      return cleanCocktail as ICocktail;
    });
    // console.log('XXXXXXXXXXXXXXXX 2 clean', '=>', cleanCocktails, 'end clean');
    // @ts-ignore
    return cleanCocktails;
  } catch (error) {
    console.log(error);
    return [];
  }
};
