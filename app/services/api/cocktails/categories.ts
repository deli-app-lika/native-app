import { ICocktail } from '../../../models/cocktail';

export enum CategoriesList {
  'tequila',
  'vodka',
  'whiskey'
}

// @ts-ignore
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
      // @ts-ignore
      return cleanCocktail as ICocktail;
    });
    return cleanCocktails;
  } catch (error) {
    console.log(error);
    return [];
  }

  return [];
};

// export const getCategoryCocktails2 = async (
//   category: string
// ): Promise<ICocktail[]> => {
//   try {
//     const item = await firestore()
//     .collection('inventory')
//     .where('searchName', '==', ingredient.name.toLowerCase())
//     .get();

//   if (item.empty) {
//     console.log('No matching documents.');
//     return;
//   }

//   item.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
//   });
//       return cleanCocktail as ICocktail;
//     });
//     return cleanCocktails;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };
