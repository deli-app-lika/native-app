export interface ICocktail {
  uid: string;
  name: string;
  searchName: string;
  ingredients: IIngredients[];
  instructions: string;
  image: string;
  category: string;
}

export interface IIngredients {
  ingredient: string;
  category: string;
  image: string;
  portion: string;
  itemId: string;
}
