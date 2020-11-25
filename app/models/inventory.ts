export interface IItem {
  category: ICategory;
  image: string;

  name: string;
  price: string;
  quantity: number;
  searchName: string;
  shopID: string;
  size: 600;
}

export interface ICategory {
  name: string;
}
