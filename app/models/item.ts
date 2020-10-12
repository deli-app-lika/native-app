export interface IItem {
  category: ICategory;
  image: string;
  itemType: IItemType;
  name: string;
  price: string;
  quantity: number;
  searchName: string;
  shopID: string;
  size: 600;
  subCategory: ISubCategory;
}

export interface ICategory {
  name: string;
}

export interface IItemType {
  name: string;
  unit: string;
}

export interface ISubCategory {
  name: string;
}
