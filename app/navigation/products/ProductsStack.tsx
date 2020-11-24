import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cart from '../../screens/cart/Cart';
import Item from '../../screens/item/Item';
import ProductTabs from '../../screens/products/ProductTabs';
import { ProductsParamList } from './ProductsParamList';

interface ProductsProps {}
const ProductsStack = createStackNavigator<ProductsParamList>();
const ProductsNav: React.FC<ProductsProps> = () => {
  return (
    <ProductsStack.Navigator initialRouteName="Products">
      <ProductsStack.Screen name="Products" component={ProductTabs} />
      <ProductsStack.Screen name="Item" component={Item} />
      <ProductsStack.Screen name="Cart" component={Cart} />
    </ProductsStack.Navigator>
  );
};
export default ProductsNav;
