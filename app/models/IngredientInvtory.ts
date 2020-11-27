export interface IIngredientInv {
  category: string;
  image: string;
  ingredient: string;
  itemId: string;
  outOfStock: boolean;
  portion: string;
  currency?: string;
  itemQuantity?: number;
  price?: number;
  size?: number;
  unit?: string;
  invID?: string;
}
