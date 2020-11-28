export interface ICartItem {
  category: string;
  image: string;
  // TODO change to name will not work with products flow
  ingredient: string;
  itemId: string;
  outOfStock: boolean;
  currency?: string;
  itemQuantity?: number;
  price?: number;
  size?: number;
  unit?: string;
  invID?: string;
  purchaseQuantity: number;
}
