import algoliasearch from 'algoliasearch';
import { ICocktail } from '../../../models/cocktail';

export enum CategoriesList {
  'bourbon',
  'gin',
  'tequila',
  'rum',
  'whiskey'
}

const client = algoliasearch('V3QJV77HHH', '50dfcd80755532141b13759738052ff1');
const index = client.initIndex('Cocktails');

export const getCategoryCocktails = async (
  category: string
): Promise<ICocktail[]> => {
  try {
    const fetchedCocktails = await index.search(category);
    const cleanCocktails = fetchedCocktails.hits.map((cocktail: any) => {
      const cleanCocktail = {
        uid: cocktail.uid,
        name: cocktail.name,
        ingredients: cocktail.ingredients,
        instructions: cocktail.instructions,
        images: cocktail.images,
        thumbnail: cocktail.thumbnail,
        category: cocktail.category
      };
      return cleanCocktail as ICocktail;
    });
    return cleanCocktails;
  } catch (error) {
    console.log(error);
    return [];
  }
};
