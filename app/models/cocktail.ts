export interface ICocktail {
  uid: string;
  name: string;
  ingredients: IIngredients[];
  instructions: string;
  images: [];
  thumbnail: string;
  category: string;
}

export interface IIngredients {
  name: string;
  portion: string;
}
